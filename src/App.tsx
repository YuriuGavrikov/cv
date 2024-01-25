import Home from "./components/Hello/Hello";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Route>
		</Routes>
	);
}
