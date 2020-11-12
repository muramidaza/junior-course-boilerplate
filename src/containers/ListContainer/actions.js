import * as types from "./types";

export const loadPreparedProductsData = (productsData) => {
	return {
		type: types.LOAD_PREPARED_PRODUCTS_DATA,
		payload: productsData
	}
}
