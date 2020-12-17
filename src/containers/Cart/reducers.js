import * as types from './types';

const initialState = {
	dispatching: false,
	error: null,
	success: false,
	cartData: {},
};

export default function reducers(state = initialState, action) {
	switch (action.type) {
		case types.DISPATCH_CART_STARTED:
			return { ...state, dispatching: true };

		case types.DISPATCH_CART_SUCCESS:
			return {
				...state,
				dispatching: false,
				error: null,
				success: true,
				cartData: {},
			};
		case types.DISPATCH_CART_FAILURE:
			return { ...state, dispatching: false, error: action.payload.error };

		case types.ADD_GOOD:
			return {
				...state,
				cartData: { ...state.cartData, [+action.payload.id]: 1},
				success: false,
			};

		case types.DELETE_GOOD:
			let arr = state.cartData;
			delete arr[action.payload.id];
			return { ...state, cartData: { ...arr } };
			
		case types.CHANGE_COUNT_GOOD:
			return {
				...state,
				cartData: {
					...state.cartData,
					[action.payload.id]: action.payload.count,
				},
			};

		case types.CLEAR_CART:
			return { ...state, cartData: {} };

		default:
			return state;
	}
}
