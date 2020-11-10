import React from 'react';
import {connect} from 'react-redux';
import {loadInitData} from '../../actions'
import {maxBy, minBy} from 'csssr-school-utils/lib/';

import ProductsPage from '../ProductsPage';

import products from '../../products.json';

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

function getCategory() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('category');
}

function getCurrentPage() {
	//const urlParams = new URLSearchParams(window.location.search);
	//return urlParams.get('currpage');
	return 1;
}

const initialState = {
	productsData: products,
	categoriesList: categories,
	filterData: {
		minPrice: minBy(x => x.price, products).price,
		maxPrice: maxBy(x => x.price, products).price,
		minDiscount: DEFAULT_DISCOUNT,
		selectedCategory: getCategory()
	},
	currentPage: getCurrentPage(),
	goodsInPage: GOODS_IN_PAGE
}

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.props.handleLoadInitData(initialState);
	}
	
	render() {
		return (
			<ProductsPage />
		);
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoadInitData: (data) => {
			dispatch(loadInitData(data))
		}
	}
}

export default connect(null, mapDispatchToProps)(App)
