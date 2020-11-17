import * as types from './types';

const initialState = {
	productsData: [],
	categoriesList: [],
	goodsInPage: 1
}

export default function reducers(state = initialState, action = {}) {
	switch (action.type) {
		case types.LOAD_INIT_DATA:
			return {...state, ...action.payload.productsData}
		default:
			return state
	}
}
