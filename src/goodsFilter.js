const filterProductByPrice = (products, minPrice, maxPrice) => {
	const predicateFn = ({price}) => price >= minPrice && price <= maxPrice;
	return products.filter(predicateFn);
};

const filterProductByDiscount = (products, minDiscount) => {
	const predicateFn = ({discount}) => discount >= minDiscount;
	return products.filter(predicateFn);
};

const filterProductByCategory = (products, selectedCategory) => {
	if(selectedCategory == -1) return products;
	const predicateFn = ({category}) => category == selectedCategory;
	return products.filter(predicateFn);
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

const pushInBrowserHistory = (pushData) => {
	console.log(pushData);
	let str = '?';
	for (var key in pushData) {
		str += key + "=" + pushData[key] + "&";
	}
	str = str.toLowerCase().substring(0, str.length - 1);
	window.history.pushState(null, "Интернет-магазин", str); 
}

export default function goodsFilter(productsData, filterData, currentPage, goodsInPage) {
	pushInBrowserHistory({...filterData, currentPage: currentPage});
	
	if(!Array.isArray(productsData) || productsData.length == 0) return [];
	
	const productsFilteredByPrice = filterProductByPrice(productsData, filterData.minPrice, filterData.maxPrice);
	const productsFilteredByDiscount = filterProductByDiscount(productsFilteredByPrice, filterData.minDiscount);
	const productsFilteredByCategory = filterProductByCategory(productsFilteredByDiscount, filterData.selectedCategory);
	const productsDividedByPages = dividProductsByPages(productsFilteredByCategory, goodsInPage);

	return productsDividedByPages;
}
