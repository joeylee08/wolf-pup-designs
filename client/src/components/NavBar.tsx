import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<ul className="linksList">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "selected" : ""
						}
					>
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/whatibuild"
						className={({ isActive }) =>
							isActive ? "selected" : ""
						}
					>
						<span>What I Build</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/selectedwork"
						className={({ isActive }) =>
							isActive ? "selected" : ""
						}
					>
						<span>Selected Work</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/aboutme"
						className={({ isActive }) =>
							isActive ? "selected" : ""
						}
					>
						<span>About Me</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive ? "selected" : ""
						}
					>
						<span>Contact</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
