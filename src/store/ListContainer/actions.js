import * as types from './types';

export const loadCountPages = countPages => {
	return {
		type: types.LOAD_COUNT_PAGES,
		payload: countPages,
	};
};
