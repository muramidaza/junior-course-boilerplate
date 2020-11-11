import {createSelector} from 'reselect';

const minPrice = state => state.minPrice;
export const selectMinPrice = createSelector(minPrice, minPrice => minPrice);

const maxPrice = state => state.maxPrice;
export const selectMaxPrice = createSelector(maxPrice, maxPrice => maxPrice);

const minDiscount = state => state.minDiscount;
export const selectMinDiscount = createSelector(minDiscount, minDiscount => minDiscount);

const selectedCategory = state => state.selectedCategory;
export const selectSelectedCategory = createSelector(selectedCategory, selectedCategory => selectedCategory);
