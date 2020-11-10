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

export const changeSelectedCategory = (value) => {
	return {
		type: 'CHANGE_SELECTED_CATEGORY',
		payload: value
	}
}

export const resetFilters = (data) => {
	return {
		type: 'RESET_FILTERS',
		payload: data
	}
}

export const changePage = (value) => {
	return {
		type: 'CHANGE_PAGE',
		payload: value
	}
}
