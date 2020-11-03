export const loadProductsData = (products, categories) => {
	return {
		type: 'LOAD_DATA',
		payload: {productData: products, categoriesList: categories} 
	}
}

export const changeMinPrice = (value) => {
	return {
		type: 'CHANGE_MINPRICE',
		payload: {minPrice: value} 
	}
}
 
export const changeMaxPrice = (value) => {
	return {
		type: 'CHANGE_MAXPRICE',
		payload: {maxPrice: value}
	}
}
 
export const changeMinDiscount = (value) => {
	return {
		type: 'CHANGE_MINDISCOUNT',
		payload: {minDiscount: value}
	}
}