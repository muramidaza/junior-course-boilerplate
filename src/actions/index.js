export const loadInitData = (data) => {
	return {
		type: 'LOAD_INIT_DATA',
		payload: {initData: data} 
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
