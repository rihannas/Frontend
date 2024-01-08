const Products = () => {
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
			<h1>Best Selling Products</h1>
			{products.map((product) => {
				return (
					<>
						<h2>{product.title}</h2>
						<p>{product.desc}</p>
						<button>{product.price}</button>
						<button>Add To Cart</button>
					</>
				);
			})}
		</>
	);
};

export { Products };
