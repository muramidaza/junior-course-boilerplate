import {createSelector} from 'reselect';

const loading = store => store.app.loading;
export const selectLoading = loading;

const error = store => store.app.error;
export const selectError = error;

const success = store => store.app.success;
export const selectSuccess = success;

const goodsInPage = store => store.app.goodsInPage;
export const selectGoodsInPage = goodsInPage;

const maxRating = store => store.app.maxRating;
export const selectMaxRating = maxRating;

const subPriceContent = store => store.app.subPriceContent;
export const selectSubPriceContent = subPriceContent;

const productsData = store => store.app.productsData;
export const selectProductsData = createSelector(productsData, productsData => productsData);

const categoriesList = store => store.app.categoriesList;
export const selectCategoriesList = createSelector(categoriesList, categoriesList => categoriesList);

const minPrice = store => store.formfilter.minPrice;
export const selectMinPrice = createSelector(minPrice, minPrice => minPrice);

const maxPrice = store => store.formfilter.maxPrice;
export const selectMaxPrice = createSelector(maxPrice, maxPrice => maxPrice);

const minDiscount = store => store.formfilter.minDiscount;
export const selectMinDiscount = createSelector(minDiscount, minDiscount => minDiscount);

const defaultParams = store => store.formfilter.defaultParams;
export const selectDefaultParams = createSelector(defaultParams, defaultParams => defaultParams);

const selectedCategory = store => store.router.location.pathname.split('/')[1] || 'all';
export const selectSelectedCategory = createSelector(selectedCategory, selectedCategory => selectedCategory);

const currentPage = store => store.router.location.pathname.split('/')[2] || 0;
export const selectCurrentPage = createSelector(currentPage, currentPage => currentPage);

const countPages = store => store.listcontainer.countPages;
export const selectCountPages = createSelector(countPages, countPages => countPages);

const selectedProductID = store => store.router.location.pathname.split('/')[2] || -1;
export const selectSelectedProduct = createSelector(productsData, selectedProductID, (productsData, selectedProductID) => productsData[+selectedProductID]);
