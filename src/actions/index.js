export const loadInitData = (data) => {
	return {
		type: 'LOAD_INIT_DATA',
		payload: data 
	}
}

export const changeMinPrice = (value) => {
	return {
		type: 'CHANGE_MINPRICE',
		payload: value
	}
}
 
export const changeMaxPrice = (value) => {
	return {
		type: 'CHANGE_MAXPRICE',
		payload: value
	}
}
 
export const changeMinDiscount = (value) => {
	return {
		type: 'CHANGE_MINDISCOUNT',
		payload: value
	}
}
