import * as types from './types';

const initialState = {
	preparedProductsData: []
}

export default function reducers(state = initialState, action = {}) {
	
	switch (action.type) {
		case types.LOAD_PREPARED_PRODUCTS_DATA:
				return {...state, preparedProductsData: action.payload}
		default:
			return state
	}
}
