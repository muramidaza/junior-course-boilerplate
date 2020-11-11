import * as types from "./types.js";

export default function reducers(state = {}, action = {}) {
	switch (action.type) {
		case types.CHANGE_PAGE:
			return {...state, currentPage: action.payload}	
		default:
			return state
	}
}
