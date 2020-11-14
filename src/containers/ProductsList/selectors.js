import {createSelector} from 'reselect';

const preparedProductsData = state => state.listcontainer.preparedProductsData;
const currentPage = state => state.paginator.currentPage;
export const selectProductsInCurrentPage = createSelector(preparedProductsData, currentPage, (preparedProductsData, currentPage) => preparedProductsData[currentPage]);
