const filterProductByPrice = (products, minPrice, maxPrice) => {
	const predicateFn = ({ price }) => price >= minPrice && price <= maxPrice;
	return products.filter(predicateFn);
};

const filterProductByDiscount = (products, minDiscount) => {
	const predicateFn = ({ discount }) => discount >= minDiscount;
	return products.filter(predicateFn);
};

const filterProductByCategory = (products, selectedCategory) => {
	if (selectedCategory && selectedCategory != 'all') {
		const predicateFn = ({ category }) => category == selectedCategory;
		return products.filter(predicateFn);
	}
	return products;
};

const dividProductsByPages = (products, productsInPage) => {
	let arrayChunks = [];
	const amountChunks = Math.ceil(products.length / productsInPage);
	if (amountChunks == 0) return [[]];
	for (let i = 0; i < amountChunks; i++) {
		arrayChunks[i] = products.slice(
			i * productsInPage,
			i * productsInPage + productsInPage
		);
	}
	return arrayChunks;
};

export default function productsFilter(
	productsData,
	filterData,
	productsInPage
) {
	if (!Array.isArray(productsData) || productsData.length == 0) return [];

	const productsFilteredByPrice = filterProductByPrice(
		productsData,
		filterData.minPrice,
		filterData.maxPrice
	);
	const productsFilteredByDiscount = filterProductByDiscount(
		productsFilteredByPrice,
		filterData.minDiscount
	);
	const productsFilteredByCategory = filterProductByCategory(
		productsFilteredByDiscount,
		filterData.selectedCategory
	);
	const productsDividedByPages = dividProductsByPages(
		productsFilteredByCategory,
		productsInPage
	);

	return productsDividedByPages;
}
