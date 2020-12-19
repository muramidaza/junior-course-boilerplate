import { createSelector } from 'reselect';

//App
export const selectLoading = store => store.app.loading;

export const selectError = store => store.app.error;

export const selectSuccess = store => store.app.success;

const getProductsData = store => store.app.productsData; //yet this function need later

export const selectProductsData = createSelector(
	getProductsData,
	productsData => productsData
);

//categoriesList
export const selectCategoriesList = createSelector(store => store.app.categoriesList, categoriesList => categoriesList);

//formFilter
export const selectMinPrice = createSelector(store => store.formfilter.minPrice, minPrice => minPrice);

export const selectMaxPrice = createSelector(store => store.formfilter.maxPrice, maxPrice => maxPrice);

export const selectMinDiscount = createSelector(store => store.formfilter.minDiscount, minDiscount => minDiscount);

export const selectDefaultParams = createSelector(store => store.formfilter.defaultParams, defaultParams => defaultParams);

const getSelectedCategory = store =>
	store.router.location.pathname.split('/')[2] || 'all';

export const selectSelectedCategory = createSelector(
	getSelectedCategory,
	selectedCategory => selectedCategory
);

//paginator
const getCurrentPage = store => store.router.location.pathname.split('/')[3] || 0;

export const selectCurrentPage = createSelector(
	getCurrentPage,
	currentPage => currentPage
);

export const selectCountPages = createSelector(store => store.listcontainer.countPages, countPages => countPages);

//productPage
const getSelectedProductID = store =>
	store.router.location.pathname.split('/')[2] || -1;

export const selectSelectedProduct = createSelector(
	getProductsData,
	getSelectedProductID,
	(productsData, selectedProductID) => productsData[+selectedProductID]
);

//cart
export const selectCartDispatchingStart = store => store.cart.dispatching;;

export const selectCartDispatchingError = store => store.cart.error;

export const selectCartDispatchingSuccess = store => store.cart.success;

const sumValues = (data) => Object.keys(data).reduce((sum, key) => sum + data[key], 0);

export const selectTotalGoodsInCart = createSelector(store => sumValues(store.cart.cartData), totalGoodsInCart => totalGoodsInCart);

const getProductByID = (products, id) => {
	for (let key in products) {
		if(products[key].id == id) return products[key];
	}
}

const getCartData = (store) => store.cart.cartData;

const sumPrice = (productsData, dataCart) => Object.entries(dataCart).reduce((sum, chunk) => sum += getProductByID(productsData, chunk[0]).price * chunk[1], 0);

export const selectTotalPriceInCart = createSelector(
	store => sumPrice(getProductsData(store), getCartData(store)),
	totalPriceInCart => totalPriceInCart
);

export const selectCartData = createSelector(getCartData, cartData => cartData);

const getDataProductsInCart = (productsData, dataCart) => {
	let dataProductsInCart = [];
	Object.entries(dataCart).map(
		(chunk) => 
			{
				let product = getProductByID(productsData, chunk[0]);
				product.count = chunk[1];
				dataProductsInCart.push(product);
			}
		);
	return dataProductsInCart;
}

export const selectDataProductsInCart = createSelector(
	store => getDataProductsInCart(getProductsData(store), getCartData(store)),
	dataProductsInCart => dataProductsInCart
)
