import React from 'react';
import {connect} from 'react-redux';

import equals from 'ramda/src/equals';

import logComponent from '../../logComponent.js';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import FormFilter from '../FormFilter';

import goodsFilter from './goodsFilter.js';

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

class ProductsPage extends logComponent {
	
	render() {
		const productsDataToShow = goodsFilter(this.props.productsData, this.props.filterData, this.props.currentPage, this.props.goodsInPage);
		const productsToShowMemo = memoizeData(productsDataToShow.products);		
		
		return (
			<div className="productsPage">
				<Header />
				<FormFilter />
				<ProductsList productsToShow={productsToShowMemo} />
			</div>
		);
	};
};

const mapStateToProps = (store) => {
	return {
		filterData: store.filterData,
		productsData: store.productsData,
		currentPage: store.currentPage,
		goodsInPage: store.goodsInPage
	}
}

export default connect(mapStateToProps)(ProductsPage)
