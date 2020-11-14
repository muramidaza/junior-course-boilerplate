import React from 'react';
import {connect} from 'react-redux';

import {initialState} from '../../loadData';

import {loadInitData} from './actions';
import {changeMinPrice, changeMaxPrice, changeMinDiscount, changeSelectedCategory} from '../FormFilter/actions';
import {changePage} from '../Paginator/actions';

import ProductsPage from '../ProductsPage';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.props.handleLoadInitData(initialState.productsData, initialState.categoriesList, initialState.goodsInPage);
		this.props.handleSetMinPrice(initialState.minPrice);
		this.props.handleSetMaxPrice(initialState.maxPrice);
		this.props.handleSetMinDiscount(initialState.minDiscount);
		this.props.handleSetSelectedCategory(initialState.selectedCategory);
		this.props.handleChangePage(0);
	}
	
	render() {
		return (
			<ProductsPage />
		);
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoadInitData: (productsData, categoriesList, goodsInPage) => {
			dispatch(loadInitData(productsData, categoriesList, goodsInPage))
		},
		handleSetMinPrice: (data) => {
			dispatch(changeMinPrice(data))
		},
		handleSetMaxPrice: (data) => {
			dispatch(changeMaxPrice(data))
		},
		handleSetMinDiscount: (data) => {
			dispatch(changeMinDiscount(data))
		},
		handleSetSelectedCategory: (data) => {
			dispatch(changeSelectedCategory(data))
		},
		handleChangePage: (data) => {
			dispatch(changePage(data))
		},		
	}
}

export default connect(null, mapDispatchToProps)(App)
