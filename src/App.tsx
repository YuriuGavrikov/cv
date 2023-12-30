// import { useState } from "react";
import Home from "./components/Hello/Hello";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

export default function App() {
	// const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Route>
		</Routes>
	);
}
