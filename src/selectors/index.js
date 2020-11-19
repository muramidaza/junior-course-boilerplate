import {createSelector} from 'reselect';

const goodsInPage = store => store.listcontainer.goodsInPage;
export const selectGoodsInPage = createSelector(goodsInPage, goodsInPage => goodsInPage);

const maxRating = store => store.listcontainer.maxRating;
export const selectMaxRating = createSelector(maxRating, maxRating => maxRating);

const productsData = store => store.listcontainer.productsData;
export const selectProductsData = createSelector(productsData, productsData => productsData);

const categoriesList = store => store.listcontainer.categoriesList;
export const selectCategoriesList = createSelector(categoriesList, categoriesList => categoriesList);

const minPrice = store => store.formfilter.minPrice;
export const selectMinPrice = createSelector(minPrice, minPrice => minPrice);

const maxPrice = store => store.formfilter.maxPrice;
export const selectMaxPrice = createSelector(maxPrice, maxPrice => maxPrice);

const minDiscount = store => store.formfilter.minDiscount;
export const selectMinDiscount = createSelector(minDiscount, minDiscount => minDiscount);

const defaultParams = store => store.formfilter.defaultParams;
export const selectDefaultParams = createSelector(defaultParams, defaultParams => defaultParams);

const selectedCategory = store => store.router.location.pathname.split('/')[1] ? store.router.location.pathname.split('/')[1] : 'all';
export const selectSelectedCategory = createSelector(selectedCategory, selectedCategory => selectedCategory);

const currentPage = store => store.router.location.pathname.split('/')[2] ? +store.router.location.pathname.split('/')[2] : 0;
export const selectCurrentPage = createSelector(currentPage, currentPage => currentPage);

const countPages = store => store.listcontainer.countPages;
export const selectCountPages = createSelector(countPages, countPages => countPages);

const selectedProductID = store => store.router.location.pathname.split('/')[2] ? +store.router.location.pathname.split('/')[2] : -1;
export const selectSelectedProduct = createSelector(productsData, selectedProductID, (productsData, selectedProductID) => productsData[selectedProductID]);
