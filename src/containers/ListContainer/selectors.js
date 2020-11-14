import {createSelector} from 'reselect';

const preparedProductsData = state => state.listcontainer.preparedProductsData;
export const selectAmountProducts = createSelector(preparedProductsData, preparedProductsData => preparedProductsData.length);