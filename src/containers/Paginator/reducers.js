import * as types from "./types";

const initialState= {currentPage: 0};

export default function reducers(state = initialState, action = {}) {
	switch (action.type) {
		case types.CHANGE_PAGE:
			return {...state, currentPage: action.payload}	
		default:
			return state
	}
}
