import {createSelector} from 'reselect';

const currentPage = state => state.paginator.currentPage;
export const selectCurrentPage = createSelector(currentPage, currentPage => currentPage);