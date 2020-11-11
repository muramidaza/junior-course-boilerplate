import {createSelector} from 'reselect';

const minPrice = state => state.formfilter.minPrice;
export const selectMinPrice = createSelector(minPrice, minPrice => minPrice);

const maxPrice = state => state.formfilter.maxPrice;
export const selectMaxPrice = createSelector(maxPrice, maxPrice => maxPrice);

const minDiscount = state => state.formfilter.minDiscount;
export const selectMinDiscount = createSelector(minDiscount, minDiscount => minDiscount);

const selectedCategory = state => state.formfilter.selectedCategory;
export const selectSelectedCategory = createSelector(selectedCategory, selectedCategory => selectedCategory);
