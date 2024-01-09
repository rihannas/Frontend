import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<h1>About us</h1>
			<p>
				We are the new skin care that will actually make your skin care about
				its appreance by force
			</p>
			<p>We were founded in 2050</p>
			<p>For any question, contact us</p>
			<Link to="/contact">
				<button>Contact Us</button>
			</Link>
		</>
	);
};

export { About };
