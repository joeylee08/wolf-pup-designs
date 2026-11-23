import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import WhatIBuild from "./pages/WhatIBuild";
import SelectedWork from "./pages/SelectedWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";
import ScrollToTop from "./ScrollToTop";
// import Flyer from "./ flyers/Basic";
// import FlyerKo from "./ flyers/BasicKo";


function App() {
	const location = useLocation();
	const isAdmin =
		location.pathname === "/admin" ||
		location.pathname.startsWith("/admin");

	const isFlyer = ["/flyer", "/flyerko"].includes(location.pathname);

	const routes = [
		<>
		{/* // 	<Route path="/flyer" element={<Flyer />} /> */}
		{/* // 	<Route path="/flyerko" element={<FlyerKo />} /> */}
			<Route path="/" element={<Home />} />
			<Route path="/whatibuild" element={<WhatIBuild />} />
			<Route path="/selectedwork" element={<SelectedWork />} />
			<Route path="/aboutme" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="*" element={<Error />} />
		</>,
	];
	return (
		<div id="app">
			{!isAdmin && !isFlyer && <NavBar />}
			<Routes>{routes}</Routes>
		</div>
	);
}

function Root() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	);
}

export default Root;
