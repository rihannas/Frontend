import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");

	function handleSubmit() {
		alert("Sumbitted");
	}
	return (
		<>
			<input
				onChange={(e) => setName(e.target.value)}
				type="text"
				placeholder="Name"
			/>
			<input
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				placeholder="Email"
			/>
			<input
				onChange={(e) => setComment(e.target.value)}
				type="text"
				placeholder="Comment"
			/>
			<button onClick={() => handleSubmit()}>Submit</button>
		</>
	);
};

export { Contact };
