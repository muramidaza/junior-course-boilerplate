import {LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, LOAD_DATA_STARTED} from './types';

import initialFilters from '../../initialFilters';
import {setFilterData} from '../FormFilter/actions';

//в последующем список категорий можно получить с сервера: const categoriesList = data.categories
const categoriesList = [
	{
		label: 'Книги',
		name: 'books'
	},
	{
		label: 'Одежда',
		name: 'clothes'
	}
];

export const loadData = (defaultDiscount, goodsInPage, maxRating, subPriceContent) => {
	return dispatch => {
		dispatch(loadDataStarted());
		
		fetch('https://course-api.school.csssr.com/products')
			.then(
				res => res.json()
			).then(
				data => {
					const productsData = data.products;

					//после того, как получены данные о продуктах, можно инициализировать данные для фильтров
					const filtersData = initialFilters(productsData, defaultDiscount);
					dispatch(setFilterData(filtersData));

					dispatch(loadDataSuccess(productsData, categoriesList, goodsInPage, maxRating, subPriceContent));

				}
			)
			.catch(
				err => dispatch(loadDataFailure(err))
			);

	};
};
  
const loadDataSuccess = (productsData, categoriesList, goodsInPage, maxRating, subPriceContent) => ({
	type: LOAD_DATA_SUCCESS,
	payload: {productsData, categoriesList, goodsInPage, maxRating, subPriceContent}
});
  
const loadDataStarted = () => ({
	type: LOAD_DATA_STARTED
});

const loadDataFailure = error => ({
	type: LOAD_DATA_FAILURE,
	payload: {error}
});
