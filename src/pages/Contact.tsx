import wolfpuplogo from "../assets/images/wolfpuplogo.png";
import { useState, useEffect } from "react";

const Contact = () => {
	type AppointmentSlot = {
		id: string;
		label: string;
	};

	const [availableSlots, setAvailableSlots] = useState<AppointmentSlot[]>([]);

	function fetchAppointments() {
		fetch("http://localhost:3001/api/appointments")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch appointments");
				return res.json();
			})
			.then((json) => setAvailableSlots(json))
			.catch((error) => {
				console.error(error);
				alert("Failed to fetch available appointments.");
			});
	}

	useEffect(() => {
		fetchAppointments();
	}, []);

	type SubmissionStatus = "idle" | "sending";
	const [messageStatus, setMessageStatus] =
		useState<SubmissionStatus>("idle");
	const [appointmentStatus, setAppointmentStatus] =
		useState<SubmissionStatus>("idle");

	const [appointmentData, setAppointmentData] = useState({
		name: "",
		email: "",
		appointmentDate: "",
		appointmentTime: "",
		message: "",
	});
	const [messageData, setMessageData] = useState({
		name: "",
		email: "",
		message: "",
	});

	//controlled form handlers
	const handleSetAppointmentData = (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = event.target;
		setAppointmentData((previous) => ({
			...previous,
			[name]: value,
			...(name === "appointmentDate" ? { appointmentTime: "" } : {}),
		}));
	};
	const handleSetMessageData = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setMessageData((previous) => ({
			...previous,
			[name]: value,
		}));
	};

	//submit handlers
	const handleRequestAppointment = (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();

		if (appointmentStatus === "sending") return;
		setAppointmentStatus("sending");

		const formattedAppointmentData = {
			name: appointmentData.name.trim(),
			email: appointmentData.email.trim(),
			message: appointmentData.message,
			appointmentSlot: `${appointmentData.appointmentDate.trim()}-${appointmentData.appointmentTime.trim()}`,
		};
		fetch("http://localhost:3001/api/appointments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formattedAppointmentData),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Failed to send message");
				//use snackbar alert
				alert("Your request was sent successfully!");
				fetchAppointments();
				setAppointmentData({
					name: "",
					email: "",
					appointmentDate: "",
					appointmentTime: "",
					message: "",
				});
			})
			.catch((error) => {
				console.error("Request submission failed:", error);
				//use snackbar alert
				alert("Request failed to send. Please try again.");
			})
			.finally(() => setAppointmentStatus("idle"));
	};
	const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (messageStatus === "sending") return;
		setMessageStatus("sending");

		fetch("http://localhost:3001/api/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(messageData),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Failed to send message");
				alert("Your message was sent successfully!");
				setMessageData({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				console.error("Message submission failed:", error);
				alert("Message failed to send. Please try again.");
			})
			.finally(() => setMessageStatus("idle"));
	};
	const datesOnly = [
		...new Map(
			availableSlots.map(
				(slot) =>
					[
						slot.id.slice(0, 10),
						slot.label.split("at")[0].trim(),
					] as const,
			),
		),
	];
	const openDates = datesOnly.map((slot) => {
		return (
			<option key={slot[0]} value={slot[0]}>
				{slot[1]}
			</option>
		);
	});
	const openTimes = availableSlots.filter(
		(slot) => slot.id.slice(0, 10) === appointmentData.appointmentDate,
	);
	const openTimesOptions = openTimes.map((slot) => (
		<option key={slot.id} value={slot.id.slice(11)}>
			{slot.label.split("at")[1].trim()}
		</option>
	));

	return (
		<div className="mainPage contact">
			<h2 className="sectionHeading">Contact Us</h2>
			<div className="child child1">
				<div className="sectionModule">
					<p className="moduleHeading">
						01 / REQUEST A FREE CONSULTATION
					</p>
					<br />
					<p>
						Schedule a free 30-minute Zoom consultation to discuss
						your business, your current workflow, and what a custom
						solution could look like.
					</p>
					<br />
					<form onSubmit={handleRequestAppointment}>
						<label htmlFor="appointmentName">Name: </label>
						<input
							type="text"
							id="appointmentName"
							name="name"
							value={appointmentData.name}
							onChange={handleSetAppointmentData}
							required
						></input>
						<label htmlFor="appointmentEmail">Email: </label>
						<input
							type="email"
							id="appointmentEmail"
							name="email"
							value={appointmentData.email}
							onChange={handleSetAppointmentData}
							required
						></input>
						<label htmlFor="appointmentDate">Select Date: </label>
						<select
							id="appointmentDate"
							name="appointmentDate"
							value={appointmentData.appointmentDate}
							onChange={handleSetAppointmentData}
							required
						>
							<option value="" disabled>
								Select One
							</option>
							{openDates}
						</select>
						<label htmlFor="appointmentTime">
							Select Time [Pacific Time PT]:{" "}
						</label>
						<select
							id="appointmentTime"
							name="appointmentTime"
							value={appointmentData.appointmentTime}
							onChange={handleSetAppointmentData}
							required
						>
							<option value="" disabled>
								Select One
							</option>
							{openTimesOptions}
						</select>
						<label htmlFor="appointmentMessage">
							Notes [Optional]:{" "}
						</label>
						<textarea
							id="appointmentMessage"
							name="message"
							rows={6}
							placeholder="Anything you would like me to know?"
							value={appointmentData.message}
							onChange={handleSetAppointmentData}
						></textarea>
						<br />
						<button
							type="submit"
							className="pageBtn"
							disabled={appointmentStatus === "sending"}
						>
							{appointmentStatus === "sending"
								? "SENDING..."
								: "SEND REQUEST"}
						</button>
					</form>
				</div>
				<br />
				<br />
				<div className="sectionModule">
					<p className="moduleHeading">02 / SEND A MESSAGE</p>
					<br />
					<p>
						Prefer to start with an email? No problem. Tell me a
						little about your project, and we can take it from
						there.
					</p>
					<br />
					<form onSubmit={handleSendMessage}>
						<label htmlFor="messageName">Name: </label>
						<input
							type="text"
							id="messageName"
							name="name"
							value={messageData.name}
							onChange={handleSetMessageData}
							required
						></input>
						<label htmlFor="messageEmail">Email: </label>
						<input
							type="email"
							id="messageEmail"
							name="email"
							value={messageData.email}
							onChange={handleSetMessageData}
							required
						></input>
						<label htmlFor="messageNotes">Your Message: </label>
						<textarea
							id="messageNotes"
							name="message"
							rows={6}
							placeholder="Tell me about your project."
							value={messageData.message}
							onChange={handleSetMessageData}
							required
						></textarea>
						<br />
						<button
							type="submit"
							className="pageBtn"
							disabled={messageStatus === "sending"}
						>
							{messageStatus === "sending"
								? "SENDING..."
								: "SEND REQUEST"}
						</button>
					</form>
				</div>
			</div>
			<div className="child child2">
				<img
					className="logoSmall"
					src={wolfpuplogo}
					alt="Wolf Pup Designs Logo"
				></img>
			</div>
		</div>
	);
};

export default Contact;
