import {createSelector} from 'reselect';

const goodsInPage = state => state.catalogpage.goodsInPage;
export const selectGoodsInPage = createSelector(goodsInPage, goodsInPage => goodsInPage);

const productsData = state => state.catalogpage.productsData;
export const selectProductsData = createSelector(productsData, productsData => productsData);

const categoriesList = state => state.catalogpage.categoriesList;
export const selectCategoriesList = createSelector(categoriesList, categoriesList => categoriesList);

const minPrice = state => state.formfilter.minPrice;
export const selectMinPrice = createSelector(minPrice, minPrice => minPrice);

const maxPrice = state => state.formfilter.maxPrice;
export const selectMaxPrice = createSelector(maxPrice, maxPrice => maxPrice);

const minDiscount = state => state.formfilter.minDiscount;
export const selectMinDiscount = createSelector(minDiscount, minDiscount => minDiscount);

const selectedCategory = state => state.formfilter.selectedCategory;
export const selectSelectedCategory = createSelector(selectedCategory, selectedCategory => selectedCategory);

const currentPage = state => state.paginator.currentPage;
export const selectCurrentPage = createSelector(currentPage, currentPage => currentPage);

const preparedProductsData = state => state.listcontainer.preparedProductsData;
export const selectAmountProducts = createSelector(preparedProductsData, preparedProductsData => preparedProductsData.length);

export const selectProductsInCurrentPage = createSelector(preparedProductsData, currentPage, (preparedProductsData, currentPage) => preparedProductsData[currentPage]);
