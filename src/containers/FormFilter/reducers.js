import * as types from "./types.js";

export default function reducers(state = {}, action = {}) {
	switch (action.type) {
		case types.CHANGE_MINPRICE:
			return {...state, minPrice: action.payload}
		case types.CHANGE_MAXPRICE:
			return {...state, maxPrice: action.payload}
		case types.CHANGE_MINDISCOUNT:
			return {...state, minDiscount: action.payload}
		case types.CHANGE_SELECTED_CATEGORY:
			return {...state, selectedCategory: action.payload}		
		case types.RESET_FILTERS:
			return {...state, ...action.payload}	
		default:
			return state
	}
}
