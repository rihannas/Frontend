import { ProductCard } from "../components/ProductCard";

// eslint-disable-next-line react/prop-types
const Products = ({ cart, setCart }) => {
	const toner = {
		title: "Omelette",
		desc: "Egg toner for oil control",
		price: 40,
	};
	const lotion = {
		title: "GooyGooy",
		desc: "Very strong toner, it can even moisturise a desert",
		price: 120,
	};
	const serum = {
		title: "GlowNBurn",
		desc: "Our best serum that will make you brighter and hotter than the sun ",
		price: 78,
	};

	const products = [serum, toner, lotion];

	return (
		<>
			{products.map((product) => {
				return (
					<>
						<ProductCard
							product={product}
							cart={cart}
							setCart={setCart}
						/>
					</>
				);
			})}
		</>
	);
};

export { Products };
