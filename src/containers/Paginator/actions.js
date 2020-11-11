import * as types from "./types.js";

export const changePage = (value) => {
	return {
		type: types.CHANGE_PAGE,
		payload: value
	}
}