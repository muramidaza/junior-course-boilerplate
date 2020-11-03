import {initialState} from './initialState'

export default function reducers(state = initialState(), action) {
	console.log(action);
	switch (action.type) {
		case 'LOAD_DATA':
			return Object.assign({}, state, {productData: action.payload.productsData}, {categoriesList: action.payload.categoriesList})
		case 'CHANGE_MINPRICE':
			return Object.assign({}, state, {minPrice: action.payload.minPrice})
		case 'CHANGE_MAXPRICE':
			return Object.assign({}, state, {maxPrice: action.payload.maxPrice})
		case 'CHANGE_MINDISCOUNT':
			return Object.assign({}, state, {minDiscount: action.payload.minDiscount})
		default:
			return state
	}
}