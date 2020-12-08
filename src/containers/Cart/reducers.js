import * as types from './types';

const initialState = {
	dispatching: false,
	error: null,
	success: false,
	cartData: [], //разряженный массив, где ключ это id товара, а значение - это количество
};

export default function reducers(state = initialState, action) {
	let arr = state.cartData;
	switch (action.type) {
		case types.DISPATCH_CART_STARTED:
			return { ...state, dispatching: true };
		case types.DISPATCH_CART_SUCCESS:
			return {
				...state,
				dispatching: false,
				error: null,
				success: true,
				cartData: []
			};
		case types.DISPATCH_CART_FAILURE:
			return { ...state, dispatching: false, error: action.payload.error };
		
		case types.ADD_GOOD:
			arr.cartData[action.payload.id] = 1;
			return { ...state, cartData: [...arr] };
		case types.DELETE_GOOD:
			arr.splice(action.payload.id, 1);
			return { ...state, cartData: [...arr] };
		case types.INCREASE_COUNT_GOOD:
			arr[action.payload.id]++;
			return { ...state, cartData: [...arr] };
		case types.DECREASE_COUNT_GOOD:
			arr[action.payload.id]--;
			return { ...state, cartData: [...arr] };
		case types.CLEAR_CART:
			return { ...state, cartData: [] };			
		
		default:
			return state;
	}
}
