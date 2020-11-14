import {createSelector} from 'reselect';

const goodsInPage = state => state.app.goodsInPage;
export const selectGoodsInPage = createSelector(goodsInPage, goodsInPage => goodsInPage);

const productsData = state => state.app.productsData;
export const selectProductsData = createSelector(productsData, productsData => productsData);

const categoriesList = state => state.app.categoriesList;
export const selectCategoriesList = createSelector(categoriesList, categoriesList => categoriesList);
