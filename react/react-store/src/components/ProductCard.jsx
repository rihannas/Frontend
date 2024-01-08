/* eslint-disable react/prop-types */
export function ProductCard({ product, cart, setCart }) {
	function handleEvent() {
		setCart([...cart, product]);
	}
	return (
		<>
			<h2>{product.title}</h2>
			<p>{product.desc}</p>
			<button>${product.price}</button>
			<button onClick={() => handleEvent()}>
				{cart.find((item) => item.title == product.title)
					? "Added To Cart"
					: "Add To Cart"}
			</button>
		</>
	);
}
