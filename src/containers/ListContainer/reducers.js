import * as types from './types';

const initialState = {
	countPages: 0,
};

export default function reducers(state = initialState, action = {}) {
	switch (action.type) {
		case types.LOAD_COUNT_PAGES:
			return { ...state, countPages: action.payload };
		default:
			return state;
	}
}
