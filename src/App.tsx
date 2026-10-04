import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatIBuild from './pages/WhatIBuild';
import SelectedWork from './pages/SelectedWork';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

function App() {
	const routes = [
		(<>
			<Route path='/' element={<Home />} />
			<Route path='/whatibuild' element={<WhatIBuild />} />
			<Route path='/selectedwork' element={<SelectedWork />} />
			<Route path='/aboutme' element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<Error />} />
		</>)
	]
	return (
		<BrowserRouter>
			<div id='app'>
				<NavBar />
					<Routes>
						{routes}
					</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
