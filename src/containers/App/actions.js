import {
	LOAD_DATA_SUCCESS,
	LOAD_DATA_FAILURE,
	LOAD_DATA_STARTED,
} from './types';

import initialFilters from '../../initialFilters';
import { setFilterData } from '../FormFilter/actions';
import { DEFAULT_DISCOUNT } from '../../config';

//в последующем список категорий можно получить с сервера: const categoriesList = data.categories
const categoriesList = [
	{
		label: 'Книги',
		name: 'books',
	},
	{
		label: 'Одежда',
		name: 'clothes',
	},
	{
		label: 'Обувь',
		name: 'boots',
	},
];

export const loadData = url => {
	return dispatch => {
		dispatch(loadDataStarted());

		fetch(url)
			.then(res => res.json())
			.then(data => {
				const isProductsLoaded =
					data.result == 'OK' && data.products && data.products.length > 0;

				if (isProductsLoaded) {
					const productsData = data.products;

					//после того, как успешно получены данные о продуктах, можно инициализировать данные для фильтров
					const filtersData = initialFilters(productsData, DEFAULT_DISCOUNT);
					dispatch(setFilterData(filtersData));

					dispatch(loadDataSuccess(productsData, categoriesList));
				} else if (data.result == 'OK') {
					throw new Error('Товары не найдены');
				} else {
					//в случае возврата сервером data.result != 'OK'
					throw new Error(data.message);
				}
			})
			.catch(err => {
				dispatch(loadDataFailure(err.message));
			});
	};
};

const loadDataSuccess = (productsData, categoriesList) => ({
	type: LOAD_DATA_SUCCESS,
	payload: {
		productsData,
		categoriesList,
	},
});

const loadDataStarted = () => ({
	type: LOAD_DATA_STARTED,
});

const loadDataFailure = error => ({
	type: LOAD_DATA_FAILURE,
	payload: { error },
});
