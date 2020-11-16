import React from 'react';
import {connect} from 'react-redux';

import goodsFilter from '../../goodsFilter';

import ProductsList from '../ProductsList';

import {loadPreparedProductsData} from './actions';
import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory, selectProductsData, selectGoodsInPage} from '../../selectors';

import './index.css';

class ListContaiter extends React.Component {
	render() {
		const prepareProductsData = goodsFilter(this.props.productsData, 
			{minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount, selectedCategory: this.props.selectedCategory}, 
			this.props.goodsInPage);

		this.props.handleLoadPreparedProductsData(prepareProductsData);
		
		return (
			<ProductsList />
		);
	};
};

const mapStateToProps = (store) => {
	return {
		minPrice: selectMinPrice(store),
		maxPrice: selectMaxPrice(store),
		minDiscount: selectMinDiscount(store),
		selectedCategory: selectSelectedCategory(store),
		productsData: selectProductsData(store),
		goodsInPage: selectGoodsInPage(store)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoadPreparedProductsData: (productsData) => {
			dispatch(loadPreparedProductsData(productsData))
		},		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContaiter)
