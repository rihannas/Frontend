// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/products"
							element={<Products />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
