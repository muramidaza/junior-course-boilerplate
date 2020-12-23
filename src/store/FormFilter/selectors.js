import { createSelector } from 'reselect';

export const selectMinPrice = createSelector(
	store => store.formfilter.minPrice,
	minPrice => minPrice
);

export const selectMaxPrice = createSelector(
	store => store.formfilter.maxPrice,
	maxPrice => maxPrice
);

export const selectMinDiscount = createSelector(
	store => store.formfilter.minDiscount,
	minDiscount => minDiscount
);

export const selectDefaultParams = createSelector(
	store => store.formfilter.defaultParams,
	defaultParams => defaultParams
);

const getSelectedCategory = store =>
	store.router.location.pathname.split('/')[2] || 'all';

export const selectSelectedCategory = createSelector(
	getSelectedCategory,
	selectedCategory => selectedCategory
);
