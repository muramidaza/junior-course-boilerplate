import { createSelector } from 'reselect';

import { selectProductsData } from '../App/selectors';

export const selectCartDispatchingStart = store => store.cart.dispatching;

export const selectCartDispatchingError = store => store.cart.error;

export const selectCartDispatchingSuccess = store => store.cart.success;

const sumValues = data =>
	Object.keys(data).reduce((sum, key) => sum + data[key], 0);

export const selectTotalProductsInCart = createSelector(
	store => sumValues(store.cart.cartData),
	totalProductsInCart => totalProductsInCart
);

const getProductByID = (products, id) => {
	for (let key in products) {
		if (products[key].id == id) return products[key];
	}
};

const getCartData = store => store.cart.cartData;

const sumPrice = (productsData, dataCart) =>
	Object.entries(dataCart).reduce(
		(sum, chunk) =>
			(sum += getProductByID(productsData, chunk[0]).price * chunk[1]),
		0
	);

export const selectTotalPriceInCart = createSelector(
	store => sumPrice(selectProductsData(store), getCartData(store)),
	totalPriceInCart => totalPriceInCart
);

export const selectCartData = createSelector(getCartData, cartData => cartData);

const getDataProductsInCart = (productsData, dataCart) => {
	let dataProductsInCart = [];
	Object.entries(dataCart).map(chunk => {
		let product = getProductByID(productsData, chunk[0]);
		product.count = chunk[1];
		dataProductsInCart.push(product);
	});
	return dataProductsInCart;
};

export const selectDataProductsInCart = createSelector(
	store => getDataProductsInCart(selectProductsData(store), getCartData(store)),
	dataProductsInCart => dataProductsInCart
);
