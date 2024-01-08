import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
	return (
		<>
			<Navbar />
			<main>
				{/* This acts like a dynamic components that allows to render a bunch of child routes */}
				{/* So this means everything that comes below the navbar will be rendered here */}
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
