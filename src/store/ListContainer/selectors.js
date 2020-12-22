import { createSelector } from 'reselect';

import { selectProductsData } from '../../store/App/selectors';

const getCurrentPage = store =>
	store.router.location.pathname.split('/')[3] || 0;

export const selectCurrentPage = createSelector(
	getCurrentPage,
	currentPage => currentPage
);

export const selectCountPages = createSelector(
	store => store.listcontainer.countPages,
	countPages => countPages
);

const getSelectedProductID = store =>
	store.router.location.pathname.split('/')[2] || -1;

export const selectSelectedProduct = store =>
	createSelector(
		selectProductsData(store),
		getSelectedProductID(store),
		(productsData, selectedProductID) => productsData[+selectedProductID]
	);
