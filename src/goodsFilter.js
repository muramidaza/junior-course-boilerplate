const filterProductByPrice = (products, minPrice, maxPrice) => {
	const predicateFn = ({price}) => price >= minPrice && price <= maxPrice;
	return products.filter(predicateFn);
};

const filterProductByDiscount = (products, minDiscount) => {
	const predicateFn = ({discount}) => discount >= minDiscount;
	return products.filter(predicateFn);
};

const filterProductByCategory = (products, selectedCategory) => {
	if(selectedCategory && selectedCategory != 'all') {
		const predicateFn = ({category}) => category == selectedCategory;
		return products.filter(predicateFn);
	}
	return products;
};

const dividProductsByPages = (products, goodsInPage) => {
	let arrayChunks = [];
	const amountChunks = Math.ceil(products.length/goodsInPage);
	if(amountChunks == 0) return [[]];
	for (let i = 0; i < amountChunks; i++){
		arrayChunks[i] = products.slice((i * goodsInPage), (i * goodsInPage) + goodsInPage);
	}
	return arrayChunks;
}

export default function goodsFilter(productsData, filterData, goodsInPage) {
		
	if(!Array.isArray(productsData) || productsData.length == 0) return [];
	
	const productsFilteredByPrice = filterProductByPrice(productsData, filterData.minPrice, filterData.maxPrice);
	const productsFilteredByDiscount = filterProductByDiscount(productsFilteredByPrice, filterData.minDiscount);
	const productsFilteredByCategory = filterProductByCategory(productsFilteredByDiscount, filterData.selectedCategory);
	const productsDividedByPages = dividProductsByPages(productsFilteredByCategory, goodsInPage);

	return productsDividedByPages;
}
