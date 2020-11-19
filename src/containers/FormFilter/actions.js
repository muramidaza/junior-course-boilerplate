import * as types from './types';

export const changeMinPrice = (value) => {
	return {
		type: types.CHANGE_MINPRICE,
		payload: value
	}
}
 
export const changeMaxPrice = (value) => {
	return {
		type: types.CHANGE_MAXPRICE,
		payload: value
	}
}
 
export const changeMinDiscount = (value) => {
	return {
		type: types.CHANGE_MINDISCOUNT,
		payload: value
	}
}

export const resetFilters = (params) => {
	return {
		type: types.RESET_FILTERS,
		payload: params
	}
}
