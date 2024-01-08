import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>Welcome to Skincare Store!</h1>
			<img
				src="https://i.pinimg.com/474x/ad/90/de/ad90deccbb9c46fd9aaee81a808da016.jpg"
				alt=""
			/>
			<Link to="/products">
				<button id="link-btn">View All Products</button>
			</Link>
		</>
	);
};

export { Home };
