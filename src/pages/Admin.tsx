import { useState } from "react";
import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const Admin = () => {
	const [adminPass, setAdminPass] = useState({ password: "" });
	const [isActive, setIsActive] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAdminPass((previous) => ({
			...previous,
			password: event.target.value,
		}));
	};

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
			<div className="child child2">{/* DASHBOARD STUFF */}</div>
		</div>
	);
};

export default Admin;
