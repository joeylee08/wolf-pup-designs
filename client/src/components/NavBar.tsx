import { NavLink } from "react-router-dom";
import { House, Hammer, Computer, PawPrint, Phone } from "lucide-react"

const NavBar = () => {
	return (
		<>
		<nav className="navbar">
			<ul className="linksList">
				<li><NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink></li>
				<li><NavLink to="/whatibuild" className={({ isActive }) => isActive ? "selected" : ""}>What I Build</NavLink></li>
				<li><NavLink to="/selectedwork" className={({ isActive }) => isActive ? "selected" : ""}>Selected Work</NavLink></li>
				<li><NavLink to="/aboutme" className={({ isActive }) => isActive ? "selected" : ""}>About Me</NavLink></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "selected" : ""}>Contact</NavLink></li>
			</ul>
		</nav>
		<nav className="mobileNav">
			<ul className='linksList'>
				<li><NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}><House size={28}/></NavLink></li>
				<li><NavLink to="/whatibuild" className={({ isActive }) => isActive ? "selected" : ""}><Hammer size={28}/></NavLink></li>
				<li><NavLink to="/selectedwork" className={({ isActive }) => isActive ? "selected" : ""}><Computer size={28}/></NavLink></li>
				<li><NavLink to="/aboutme" className={({ isActive }) => isActive ? "selected" : ""}><PawPrint size={28}/></NavLink></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "selected" : ""}><Phone size={28}/></NavLink></li>
			</ul>
		</nav>
		</>
	);
};

export default NavBar;
