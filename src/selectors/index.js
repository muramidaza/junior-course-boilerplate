import { createSelector } from 'reselect';

//App
const loading = store => store.app.loading;
export const selectLoading = loading;

const error = store => store.app.error;
export const selectError = error;

const success = store => store.app.success;
export const selectSuccess = success;

const productsData = store => store.app.productsData;
export const selectProductsData = createSelector(
	productsData,
	productsData => productsData
);

//categoriesList
const categoriesList = store => store.app.categoriesList;
export const selectCategoriesList = createSelector(
	categoriesList,
	categoriesList => categoriesList
);

//formFilter
const minPrice = store => store.formfilter.minPrice;
export const selectMinPrice = createSelector(minPrice, minPrice => minPrice);

const maxPrice = store => store.formfilter.maxPrice;
export const selectMaxPrice = createSelector(maxPrice, maxPrice => maxPrice);

const minDiscount = store => store.formfilter.minDiscount;
export const selectMinDiscount = createSelector(
	minDiscount,
	minDiscount => minDiscount
);

const defaultParams = store => store.formfilter.defaultParams;
export const selectDefaultParams = createSelector(
	defaultParams,
	defaultParams => defaultParams
);

const selectedCategory = store =>
	store.router.location.pathname.split('/')[2] || 'all';
export const selectSelectedCategory = createSelector(
	selectedCategory,
	selectedCategory => selectedCategory
);

//paginator
const currentPage = store => store.router.location.pathname.split('/')[3] || 0;
export const selectCurrentPage = createSelector(
	currentPage,
	currentPage => currentPage
);

const countPages = store => store.listcontainer.countPages;
export const selectCountPages = createSelector(
	countPages,
	countPages => countPages
);

//productPage
const selectedProductID = store =>
	store.router.location.pathname.split('/')[2] || -1;
export const selectSelectedProduct = createSelector(
	productsData,
	selectedProductID,
	(productsData, selectedProductID) => productsData[+selectedProductID]
);

//cart
const cartDispatchingStart = store => store.cart.dispatching;
export const selectCartDispatchingStart = cartDispatchingStart;

const cartDispatchingError = store => store.cart.error;
export const selectCartDispatchingError = cartDispatchingError;

const cartDispatchingSuccess = store => store.cart.success;
export const selectCartDispatchingSuccess = cartDispatchingSuccess;

function sumValues(data) {
	if (!data) return 0;
	let sum = 0;
	const arrValues = Object.values(data)
	for (let value of arrValues) {
		sum += value;
	}
	return sum;
}

const totalGoodsInCart = store => sumValues(store.cart.cartData);
export const selectTotalGoodsInCart = createSelector(
	totalGoodsInCart,
	totalGoodsInCart => totalGoodsInCart
);

function sumPrice(dataProduct, dataCart) {
	if (!dataCart) return 0;
	let sum = 0;
	const arrCart = Object.entries(dataCart)
	for (let arr of arrCart) {
		sum += dataProduct[arr[0]].price * arr[1];
	}
	return sum;
}

const totalPriceInCart = store => sumPrice(store.app.productsData, store.cart.cartData);
export const selectTotalPriceInCart = createSelector(
	totalPriceInCart,
	totalPriceInCart => totalPriceInCart
);

const cartData = store => store.cart.cartData;
export const selectCartData = createSelector(cartData, cartData => cartData);

function getDataProductsInCart(dataProduct, dataCart) {
	if (!dataCart) return [];
	let dataProductsInCart = [];
	const arrData = Object.entries(dataCart)
	for (let arr of arrData) {
		let dataProduct = dataProduct[arr[0]];
		dataProduct.count = arr[1];
		dataProductsInCart.push(dataProduct);
	}
	return dataProductsInCart;
}

const dataProductsInCart = store => getDataProductsInCart(store.app.productsData, store.cart.cartData);
export const selectDataProductsInCart = createSelector(
	dataProductsInCart,
	dataProductsInCart => dataProductsInCart
)
