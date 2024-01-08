/* eslint-disable react/prop-types */

import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Cart({ cart }) {
	useEffect(() => {
		console.log(cart);
	});
	return (
		<>
			<h1>Cart:</h1>
			{cart.map((item) => {
				return (
					<>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
					</>
				);
			})}
		</>
	);
}
