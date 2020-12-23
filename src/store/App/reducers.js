import * as types from './types';

const initialState = {
	loading: false,
	error: null,
	success: false,
	productsData: [],
	categoriesList: [],
	preparedProductsData: [],
};

export default function reducers(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_DATA_STARTED:
			return { ...state, loading: true };
		case types.LOAD_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				success: true,
				productsData: action.payload.productsData,
				categoriesList: action.payload.categoriesList,
			};
		case types.LOAD_DATA_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
}
