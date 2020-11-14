import * as types from './types';

export const changePage = (value) => {
	return {
		type: types.CHANGE_PAGE,
		payload: value
	}
}
