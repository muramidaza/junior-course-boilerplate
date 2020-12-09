import { createSelector } from 'reselect';

//App
const loading = store => store.app.loading;
export const selectLoading = loading;

const error = store => store.app.error;
export const selectError = error;

const success = store => store.app.success;
export const selectSuccess = success;

const goodsInPage = store => store.app.goodsInPage;
export const selectGoodsInPage = goodsInPage;

const maxRating = store => store.app.maxRating;
export const selectMaxRating = maxRating;

const subPriceContent = store => store.app.subPriceContent;
export const selectSubPriceContent = subPriceContent;

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
	store.router.location.pathname.split('/')[1] || 'all';
export const selectSelectedCategory = createSelector(
	selectedCategory,
	selectedCategory => selectedCategory
);

//paginator
const currentPage = store => store.router.location.pathname.split('/')[2] || 0;
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
	if(!data) return 0;
	let sum = 0;
	for (let value of Object.values(data)) {
		sum += value;
	};
	return sum;
}

const totalGoodsInCart = store => sumValues(store.cart.cartData);
export const selectTotalGoodsInCart = createSelector(
	totalGoodsInCart,
	totalGoodsInCart => totalGoodsInCart
);

const cartData = store => store.cart.cartData;
export const selectCartData = createSelector(
	cartData,
	cartData => cartData
);
