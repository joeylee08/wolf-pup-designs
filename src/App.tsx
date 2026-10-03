import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatIBuild from './pages/WhatIBuild';
import SelectedWork from './pages/SelectedWork';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
	const routes = [
		(<>
			<Route path='/' element={<Home />} />
			<Route path='/menu' element={<WhatIBuild />} />
			<Route path='/history' element={<SelectedWork />} />
			<Route path='/settings' element={<About />} />
			<Route path="/login" element={<Contact />} />
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
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
