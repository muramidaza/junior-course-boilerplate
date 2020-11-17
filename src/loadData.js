import {maxBy, minBy} from 'csssr-school-utils/lib/';

import products from './products.json';

const categoriesList = [
	{
		id: 0,
		label: 'Смартфоны',
		name: 'smartphones'
	},
	{
		id: 1,
		label: 'Аксессуары',
		name: 'accessories'
	}
];

const productsData = products;

const DEFAULT_DISCOUNT = 0;
const GOODS_IN_PAGE = 3;

function getMinPrice() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('minprice');
}

function getMaxPrice() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('maxprice');
}

function getMinDiscount() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('mindiscount');
}

function getSelectedCategory() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('selectedcategory');
}

function getCurrentPage() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('currentpage');
}

export const initialState = {
	productsData: productsData,
	categoriesList: categoriesList,
	minPrice: (getMinPrice() !== null ? +getMinPrice() : minBy(x => x.price, productsData).price),
	maxPrice: (getMaxPrice() !== null ? +getMaxPrice() : maxBy(x => x.price, productsData).price),
	minDiscount: (getMinDiscount() !== null ? +getMinDiscount() : DEFAULT_DISCOUNT),
	selectedCategory: (getSelectedCategory() !== null ? +getSelectedCategory() : -1),
	currentPage: (getCurrentPage() !== null ? +getCurrentPage() : 0),
	goodsInPage: GOODS_IN_PAGE
}

export const resetInitialStateFilters = {
	minPrice: minBy(x => x.price, productsData).price,
	maxPrice: maxBy(x => x.price, productsData).price,
	minDiscount: DEFAULT_DISCOUNT,
	selectedCategory: -1
}
