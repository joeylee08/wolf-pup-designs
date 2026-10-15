import express from "express";
import cors from "cors";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import pg from "pg";
import bcrypt from "bcrypt";
import "dotenv/config";
import { prisma } from "./db.js";
import { Prisma } from "./generated/prisma/client.js";
import { sendZohoEmail } from "./zohoMailer.js";
import { generateAppointmentSlots } from "./appointments.js";
import type { Request, Response, NextFunction } from "express";
import { rateLimit } from "express-rate-limit";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

const PgSession = connectPgSimple(session);

const sessionPool = new pg.Pool({
	connectionString: process.env.DATABASE_URL
});

const sessionStore = new PgSession({
	pool: sessionPool,
	createTableIfMissing: true
});

const frontendOrigin = process.env.NODE_ENV === "production"
	? "https://wolfpupdesigns.org"
	: "http://localhost:5173";

app.use(cors({
	origin: frontendOrigin,
	credentials: true
}));

app.use(express.json());

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not configured.")
}

app.set("trust proxy", 1);

app.use(session({
    name: "wolfpup.sid",
    store: sessionStore,
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.isAdmin !== true) return res.status(401).json({ error: "Unauthorized" });
	next();
};

const requireTrustedOrigin = (req: Request, res: Response, next: NextFunction) => {
	const origin = req.get("Origin");

	if (origin !== frontendOrigin) {
		return res.status(403).json({
			error: "Request origin not allowed."
		});
	}

	next();
};

app.get("/api/appointments", async (req, res) => {
  try {
    const slots = generateAppointmentSlots();

    const bookedAppointments = await prisma.appointment.findMany({
        select: { appointmentSlot: true },
    });
    const bookedTimes = new Set(bookedAppointments.map((appointment) => appointment.appointmentSlot));

    const blockedSlots = await prisma.blockedSlot.findMany({
      select: { appointmentSlot: true}
    })
    const blockedTimes = new Set(blockedSlots.map((slot) => slot.appointmentSlot));

    const availableSlots = slots.filter((slot) => !bookedTimes.has(slot.id) && !blockedTimes.has(slot.id));

    res.status(200).json(availableSlots);
  } catch(error) {
    console.error("Failed to fetch available appointments:", error);

    res.status(500).json({ error: "Unable to fetch available appointments." });
  }
});

app.post("/api/messages", async (req, res) => {
  const { name, email, message } = req.body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    const savedMessage = await prisma.message.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      },
    });
    try {
        await sendZohoEmail({
            to: "info@wolfpupdesigns.org",
            subject: `Inquiry from ${name.trim()}`,
            text: [
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            "",
            "Message:",
            message.trim(),
            ].join("\n"),
        });
    } catch(error) {
        console.error(`Email notification failed for message ${savedMessage.id}:`, error);
    }
    return res.status(201).json({
      success: true,
      id: savedMessage.id,
    });
  } catch (error) {
    console.error("Failed to save message:", error);

    return res.status(500).json({
      error: "Unable to save message.",
    });
  }
});

function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, char => {
		const entities: Record<string, string> = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		};

		return entities[char] ?? char;
	});
}

app.post("/api/appointments", async (req, res) => {
  const { name, email, message, appointmentSlot } = req.body
  if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof appointmentSlot !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !appointmentSlot.trim() ||
      (message !== undefined && typeof message !== "string")
  ) {
    return res.status(400).json({
        error: "Invalid appointment request."
    })
  }

  const requestedSlot = appointmentSlot.trim()
  const validSlots = generateAppointmentSlots()

  const slot = validSlots.find(slot => slot.id === requestedSlot)

  if (!slot) {
    return res.status(400).json({
        error: "The requested appointment slot is invalid or no longer available."
    })
  }

  try {
    const isBlocked = await prisma.blockedSlot.findUnique({
      where: { appointmentSlot: requestedSlot}
    })
    
    if (isBlocked) {
      return res.status(409).json({
        error: "This appointment slot is blocked."
      });
    }

    const savedAppointment = await prisma.appointment.create({
      data: {
          name: name.trim(),
          email: email.trim(),
          message: message?.trim() || null,
          appointmentSlot: requestedSlot
      }
    })
    // nested try/catch to send appointment email alert to me
    try {
		await sendZohoEmail({
			to: "info@wolfpupdesigns.org",
			subject: `New Consultation Request from ${name.trim()}`,
			text: [
				`Name: ${name.trim()}`,
				`Email: ${email.trim()}`,
				`Appointment: ${slot.label} (Pacific Time)`,
				"",
				"Notes:",
				message?.trim() || "None provided"
			].join("\n")
		})
    } catch(error) {
        console.error(`Email notification failed for appointment ${savedAppointment.id}:`,error)
    }
    try {
      await sendZohoEmail({
          to: email.trim(),
          subject: "Your Wolf Pup Designs Consultation Is Confirmed",
          html: true,
          text: [
            `<p>Hi, ${escapeHtml(name.trim())},</p>`,
            "<p>Your complimentary 30-minute consultation has been scheduled.</p>",
            `<p><strong>${escapeHtml(slot.label)} (Pacific Time)</strong></p>`,
            "<p>I'll follow up with the Zoom meeting details.</p>",
            "<p>If you need to cancel or reschedule, simply reply to this email.</p>",
            "<p>Looking forward to speaking with you.</p>",
            '<p><img src="https://wolfpupdesigns.org/emailwolflogo.png" alt="Wolf Pup Designs" width="240" style="display:block;max-width:120px;height:auto;"></p>'
          ].join("\n")
      })
    } catch (error) {
        console.error(`Customer confirmation email failed for appointment ${savedAppointment.id}:`, error)
    }
    return res.status(201).json({
        success: true,
        id: savedAppointment.id
    })
  } catch(error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return res.status(409).json({
          error: "This appointment slot has already been booked."
      })
    }
    console.error("Failed to book appointment:", error);
    return res.status(500).json({
        error: "Unable to book appointment."
    })
  }
})

const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 5,
	standardHeaders: "draft-8",
	legacyHeaders: false,
	message: {
		error: "Too many login attempts. Please try again in 15 minutes."
	}
});

app.post("/api/admin/login", requireTrustedOrigin, loginLimiter, async(req, res) => {
  const { password } = req.body;
  if (typeof password !== "string" || !password) {
	return res.status(400).json({
		error: "Password is required."
	});
  }
  try {
    const passwordMatches = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH!)
    if (!passwordMatches) {
      return res.status(401).json({
          error: "Incorrect password."
      })
    }
    // Password is correct. Create the admin session.
    req.session.regenerate(error => {
      if (error) {
        console.error("Session creation failed:", error);
        return res.status(500).json({
            error: "Unable to create admin session."
        })
      }
      req.session.isAdmin = true;
      req.session.save(error => {
        if (error) {
          console.error("Session save failed:", error);
          return res.status(500).json({
              error: "Unable to save admin session."
          })
        }
        return res.status(200).json({
            success: true
        })
      })
    })
  } catch(error) {
      console.error("Admin login failed:", error);
      return res.status(500).json({
          error: "Unable to authenticate."
      })
  }
})

app.post("/api/admin/logout", requireAdmin, requireTrustedOrigin, (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.error("Admin logout failed:", error);
      return res.status(500).json({
          error: "Unable to log out."
      });
    }
    res.clearCookie("wolfpup.sid");
    return res.status(200).json({
        success: true
    });
  });
});

app.get("/api/admin/session", (req, res) => {
  return res.status(200).json({
      authenticated: req.session.isAdmin === true
  });
});

app.get("/api/admin/appointments", requireAdmin, async (req, res) => {
	try {
		const appointments = await prisma.appointment.findMany();
    const slotOrder: Record<string, number> = {
      M1: 1,
      M2: 2,
      A1: 3,
      A2: 4,
      E1: 5,
      E2: 6
    };
    appointments.sort((a, b) => {
      const dateA = a.appointmentSlot.slice(0, 10);
      const dateB = b.appointmentSlot.slice(0, 10);

      if (dateA !== dateB) return dateA.localeCompare(dateB);

      const slotA = a.appointmentSlot.slice(11);
      const slotB = b.appointmentSlot.slice(11);

      return (slotOrder[slotA] ?? Infinity) - (slotOrder[slotB] ?? Infinity);
    });
		return res.status(200).json(appointments);
	} catch (error) {
		console.error("Failed to retrieve appointments:", error);
		return res.status(500).json({ error: "Unable to retrieve appointments." });
	}
});

app.delete("/api/admin/appointments/:id", requireAdmin, requireTrustedOrigin, async (req, res) => {
	const id = Number(req.params.id);

	if (!Number.isSafeInteger(id) || id <= 0) {
		return res.status(400).json({ error: "Invalid appointment ID." });
	}

	try {
		const deleted = await prisma.appointment.deleteMany({ where: { id } });

		if (deleted.count === 0) {
			return res.status(404).json({ error: "Appointment not found." });
		}

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Failed to cancel appointment:", error);
		return res.status(500).json({ error: "Unable to cancel appointment." });
	}
});

app.get("/api/admin/slots", requireAdmin, async (req, res) => {
	try {
		const slots = generateAppointmentSlots(false);

		const appointments = await prisma.appointment.findMany({
			select: { appointmentSlot: true }
		});

		const blockedSlots = await prisma.blockedSlot.findMany({
			select: { appointmentSlot: true }
		});

		const bookedTimes = new Set(
			appointments.map(item => item.appointmentSlot)
		);

		const blockedTimes = new Set(
			blockedSlots.map(item => item.appointmentSlot)
		);

		const slotsWithStatus = slots.map(slot => ({
			...slot,
			status: bookedTimes.has(slot.id)
				? "BOOKED"
				: blockedTimes.has(slot.id)
					? "BLOCKED"
					: "OPEN"
		}));

		res.status(200).json(slotsWithStatus);
	} catch (error) {
		console.error("Failed to fetch upcoming slots:", error);
		res.status(500).json({ error: "Unable to fetch upcoming slots." });
	}
});

app.post("/api/admin/slots/block", requireAdmin, requireTrustedOrigin, async (req, res) => {
	const { appointmentSlot } = req.body;

	if (typeof appointmentSlot !== "string") {
		return res.status(400).json({ error: "Invalid slot." });
	}

	const validSlots = generateAppointmentSlots(false);

	if (!validSlots.some(slot => slot.id === appointmentSlot)) {
		return res.status(400).json({ error: "Invalid or expired slot." });
	}

	try {
		const blocked = await prisma.$transaction(async tx => {
			const booked = await tx.appointment.findUnique({
				where: { appointmentSlot }
			});

			if (booked) return false;

			await tx.blockedSlot.create({
				data: { appointmentSlot }
			});

			return true;
		});

		if (!blocked) {
			return res.status(409).json({ error: "Slot is already booked." });
		}

		return res.status(201).json({ success: true });
	} catch(error) {
		console.error("Failed to block slot:", error);
		return res.status(409).json({ error: "Unable to block slot." });
	}
});

app.delete("/api/admin/slots/block", requireAdmin, requireTrustedOrigin, async (req, res) => {
	const { appointmentSlot } = req.body;

	if (typeof appointmentSlot !== "string") {
		return res.status(400).json({ error: "Invalid slot." });
	}

	try {
		await prisma.blockedSlot.deleteMany({
			where: { appointmentSlot }
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Failed to unblock slot:", error);
		return res.status(500).json({ error: "Unable to unblock slot." });
	}
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});