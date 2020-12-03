import * as types from './types';

const initialState = {
	minPrice: 0,
	maxPrice: 1000000,
	minDiscount: 0,
	defaultParams: {
		minPrice: 0,
		maxPrice: 1000000,
		minDiscount: 0	
	}
}

export default function reducers(state = initialState, action = {}) {
	switch (action.type) {
		case types.SET_FILTER_DATA:
			return {...state, ...action.payload}
		case types.CHANGE_MINPRICE:
			return {...state, minPrice: action.payload}
		case types.CHANGE_MAXPRICE:
			return {...state, maxPrice: action.payload}
		case types.CHANGE_MINDISCOUNT:
			return {...state, minDiscount: action.payload}
		case types.RESET_FILTERS:
			return {...state, ...action.payload}			
		default:
			return state
	}
}
