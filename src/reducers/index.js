const initialState = {
	productsData: [],
	categoriesList: [],
	filterData: {
		minPrice: 0,
		maxPrice: 1000000,
		minDiscount: 0,
		selectedCategory: -1
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
		case 'CHANGE_SELECTED_CATEGORY':
			return {...state, filterData: {...state.filterData, selectedCategory: action.payload}}
		case 'CHANGE_PAGE':
			return {...state, currentPage: action.payload}			
		case 'RESET_FILTERS':
			return {...state, filterData: {...state.filterData, ...action.payload}}			
		default:
			return state
	}
}
