import React from 'react';
import {connect} from 'react-redux';

import equals from 'ramda/src/equals';
import goodsFilter from '../../goodsFilter';
import pushInBrowserHistory from '../../pushInBrowserHistory';

import logComponent from '../../logComponent';
import ProductsList from '../ProductsList'

import {loadPreparedProductsData} from './actions';

import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory} from '../FormFilter/selectors';
import {selectProductsData, selectGoodsInPage} from '../App/selectors';
import {selectCurrentPage} from  '../Paginator/selectors';

import './index.css';

let memoizedData = null;
function memoizeData(data) {
	if (!equals(memoizedData, data)) {
		memoizedData = data;
		return data;
	} else {
		return memoizedData;
	};
};

class ListContaiter extends logComponent {
	
	render() {
		pushInBrowserHistory({minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount, 
			selectedCategory: this.props.selectedCategory, currentPage: this.props.currentPage});
		
		const prepareProductsData = goodsFilter(this.props.productsData, 
			{minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount, selectedCategory: this.props.selectedCategory}, 
			this.props.goodsInPage);
		
		const prepareProductsDataMemo = memoizeData(prepareProductsData);	
		this.props.handleLoadPreparedProductsData(prepareProductsDataMemo);
		
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
		currentPage: selectCurrentPage(store),
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

