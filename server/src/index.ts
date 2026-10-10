import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "./db.js";
import { transporter } from "./mail.js";

const app = express();
const PORT = 3001;

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

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
    return res.status(400).json({
      error: "Name, email, and message are required.",
    });
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
        await transporter.sendMail({
            from: '"Wolf Pup Designs" <info@wolfpupdesigns.org>',
            to: "info@wolfpupdesigns.org",
            replyTo: email.trim(),
            subject: `Inquiry from ${name.trim()}`,
            text: [
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            "",
            "Message:",
            message.trim(),
            ].join("\n"),
        });
        } catch (error) {
        console.error(
            `Email notification failed for message ${savedMessage.id}:`,
            error
        );
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});