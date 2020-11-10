const initialState = {
	productsData: [],
	categoriesList: [],
	filterData: {
		minPrice: 0,
		maxPrice: 1000000,
		minDiscount: 0,
		selectedCategory: null
	},
	currentPage: 1,
	goodsInPage: 1	
}

export default function reducers(state = initialState, action) {
	switch (action.type) {
		case 'LOAD_INIT_DATA':
			return {...state, ...action.payload}
		case 'CHANGE_MINPRICE':
			return {...state, filterData: {...state.filterData, minPrice: action.payload}}
		case 'CHANGE_MAXPRICE':
			return {...state, filterData: {...state.filterData, maxPrice: action.payload}}
		case 'CHANGE_MINDISCOUNT':
			return {...state, filterData: {...state.filterData, minDiscount: action.payload}}
		default:
			return state
	}
}
