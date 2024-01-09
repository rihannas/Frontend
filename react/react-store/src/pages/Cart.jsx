/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function Cart({ cart, setCart }) {
	function EventHandler(item) {
		setCart(cart.filter((product) => product.title != item.title));
	}

	return (
		<>
			{cart.map((item) => {
				return (
					<>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button onClick={() => EventHandler(item)}>Remove Item</button>
					</>
				);
			})}
		</>
	);
}
