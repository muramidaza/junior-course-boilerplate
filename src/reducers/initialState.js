import {maxBy, minBy} from 'csssr-school-utils/lib/';

import products from '../products.json';

const categories = [
	{
		id: 0,
		name: 'Smartphones'
	},
	{
		id: 1,
		name: 'Accessories'
	}
];

const DEFAULT_DISCOUNT = 0;

function getCategory() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('category');
}

export const initialState = () => {
	return {
		productsData: products,
		categoriesList: categories,
		minPrice: minBy(x => x.price, products).price,
		maxPrice: maxBy(x => x.price, products).price,
		minDiscount: DEFAULT_DISCOUNT,
		selectedCategory: getCategory()
	}
}