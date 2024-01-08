import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<button>Home</button>
			</Link>
			<Link to="/products">
				<button>Products</button>
			</Link>
			<Link to="/about">
				<button>About Us</button>
			</Link>
			<Link to="/contact">
				<button>Contact</button>
			</Link>

			<Link to="/cart">
				<button>Cart</button>
			</Link>
		</div>
	);
};

export { Navbar };
