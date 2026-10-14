import { useState, useEffect } from "react";
import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const Admin = () => {
	type Appointment = {
		id: number;
		name: string;
		email: string;
		message: string | null;
		dateAndTime: string;
		appointmentSlot: string;
	};

	type AppointmentSlot = {
		id: string;
		label: string;
		status: "OPEN" | "BOOKED" | "BLOCKED";
	};

	const formatDate = (date: string) => {
		const [year, month, day] = date.split("-").map(Number);

		return new Date(year, month - 1, day).toLocaleDateString("en-US", {
			weekday: "short",
			month: "short",
			day: "numeric"
		});
	};

	const [adminPass, setAdminPass] = useState({ password: "" });
	const [isActive, setIsActive] = useState(true);
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [slots, setSlots] = useState<AppointmentSlot[]>([]);

	//check admin session
	useEffect(() => {
		fetch("http://localhost:3001/api/admin/session", {
			credentials: "include"
		})
		.then(res => {
			if (!res.ok) throw new Error("Failed to check admin session");
			return res.json();
		})
		.then(data => setIsActive(data.authenticated))
		.catch(error => {
			console.error("Session check failed:", error);
			setIsActive(false);
		});
	}, []);

	//fetch all scheduled appointments
	useEffect(() => {
		if (!isActive) return;

		fetch("http://localhost:3001/api/admin/appointments", {
			credentials: "include"
		})
		.then(res => {
			if (!res.ok) throw new Error("Failed to fetch appointments");
			return res.json();
		})
		.then(data => setAppointments(data))
		.catch(error => console.error("Appointment fetch failed:", error));
	}, [isActive]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAdminPass((previous) => ({
			...previous,
			password: event.target.value,
		}));
	};

	//fetch all upcoming slots, booked or otherwise
	useEffect(() => {
		if (!isActive) return;

		fetch("http://localhost:3001/api/admin/slots", {
			credentials: "include"
		})
		.then(res => {
			if (!res.ok) throw new Error("Failed to fetch upcoming slots.");
			return res.json();
		})
		.then(data => setSlots(data))
		.catch(error => console.error("Upcoming slots fetch failed:", error));
	}, [isActive]);

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetch("http://localhost:3001/api/admin/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include",
			body: JSON.stringify(adminPass)
		})
		.then(res => {
			if (!res.ok) throw new Error("Invalid admin password.");
			setIsActive(true);
		})
		.catch(error => {
			console.error("Admin login failed:", error);
			alert("Login failed. Please check your password.");
		});
	};

	const slotTimes: Record<string, string> = {
      M1: '9:00 AM',
      M2: '9:45 AM',
      A1: '2:00 PM',
      A2: '2:45 PM',
      E1: '7:00 PM',
      E2: '7:45 PM'
    };
	
	const scheduledAppointments = appointments.map(item => (
		<div className='appointmentCard' key={item.id}>
			{item.name}
			<br/>
			{item.email}
			<br/>
			<br/>
			{formatDate(item.appointmentSlot.slice(0, 10))} @ {slotTimes[item.appointmentSlot.slice(11)]}
		</div>
	))

	const groupedSlots = slots.reduce<Record<string, AppointmentSlot[]>>((groups, slot) => {
		const date = slot.id.slice(0, 10);

		if (!groups[date]) groups[date] = [];

		groups[date].push(slot);

		return groups;
	}, {});

	const allSlots = Object.entries(groupedSlots).map(([date, daySlots]) => (
		<div className="dayGroup" key={date}>
			<h3>{formatDate(date)}</h3>
			<div className="daySlots">
					{["M1", "M2", "A1", "A2", "E1", "E2"].map(code => {
						const slot = daySlots.find(item => item.id.endsWith(code));
						return (
							<div className={`slotCard ${slot ? "" : "missing"}`} key={code} onClick={() => {if (slot) handleToggleSlot(slot)}}>
								{slot && (			
									<>
										<p>{slot.label.slice(15)}</p>
										<p className={slot.status}>{slot.status}</p>
									</>
								)}
							</div>
						);
					})}
			</div>
		</div>
	));

	const handleToggleSlot = (slot: AppointmentSlot) => {
		if (slot.status === "BOOKED") return;

		const blocking = slot.status === "OPEN";

		fetch("http://localhost:3001/api/admin/slots/block", {
			method: blocking ? "POST" : "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include",
			body: JSON.stringify({ appointmentSlot: slot.id })
		})
		.then(res => {
			if (!res.ok) throw new Error("Failed to update slot.");

			setSlots(previous =>
				previous.map(item =>
					item.id === slot.id
						? { ...item, status: blocking ? "BLOCKED" : "OPEN" }
						: item
				)
			);
		})
		.catch(error => console.error("Slot update failed:", error));
	};

	return !isActive ? (
		<div className="mainPage admin">
			<div className="child child1">
				<img
					className="logoSmall"
					src={wolfpuplogo}
					alt="Wolf Pup Logo"
				/>
				<form onSubmit={handleLogin}>
					<input
						type="password"
						name="password"
						placeholder="Enter Admin Pass"
						value={adminPass.password}
						onChange={handleChange}
					></input>
					<button type="submit" className="pageBtn">
						LOGIN
					</button>
				</form>
			</div>
		</div>
	) : (
		<div className="mainPage admin">
			<h2 className="sectionHeading">Scheduled Appointments</h2>
			<div className="child child2">{scheduledAppointments}</div>
			<br/>
			<h2 className="sectionHeading">All Appointment Slots</h2>
			<div className='child child3'>
				<div className='upcomingSlots'>{allSlots}</div>
			</div>
		</div>
	);
};

export default Admin;
