/* eslint-disable react/prop-types */
export function ProductCard({ product }) {
	return (
		<>
			<h2>{product.title}</h2>
			<p>{product.desc}</p>
			<button>${product.price}</button>
			<button>Add To Cart</button>
		</>
	);
}
