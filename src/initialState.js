import products from './products.json';
import {maxBy, minBy} from 'csssr-school-utils/lib/';

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
	productsData: products,
	categoriesList: categories,
	minPrice: (getMinPrice() !== null ? +getMinPrice() : minBy(x => x.price, products).price),
	maxPrice: (getMaxPrice() !== null ? +getMaxPrice() : maxBy(x => x.price, products).price),
	minDiscount: (getMinDiscount() !== null ? +getMinDiscount() : DEFAULT_DISCOUNT),
	selectedCategory: (getSelectedCategory() !== null ? +getSelectedCategory() : -1),
	currentPage: (getCurrentPage() !== null ? +getCurrentPage() : 0),
	goodsInPage: GOODS_IN_PAGE
}

export const resetInitialStateFilters = {
	minPrice: minBy(x => x.price, products).price,
	maxPrice: maxBy(x => x.price, products).price,
	minDiscount: DEFAULT_DISCOUNT,
	selectedCategory: -1,
	currentPage: 0
}