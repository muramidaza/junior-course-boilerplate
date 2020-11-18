import * as types from './types';

const initialState = {
	minPrice: 0,
	maxPrice: 1000000,
	minDiscount: 0,
	selectedCategory: -1
}

export default function reducers(state = initialState, action = {}) {
	switch (action.type) {
		case types.CHANGE_MINPRICE:
			return {...state, minPrice: action.payload}
		case types.CHANGE_MAXPRICE:
			return {...state, maxPrice: action.payload}
		case types.CHANGE_MINDISCOUNT:
			return {...state, minDiscount: action.payload}
		default:
			return state
	}
}
