import * as types from './types';

export const loadInitData = (productsData, categoriesList, goodsInPage) => {
	return {
		type: types.LOAD_INIT_DATA,
		payload: {productsData: productsData, categoriesList: categoriesList, goodsInPage: goodsInPage} 
	}
}
