import React from 'react';
import {connect} from 'react-redux';

import equals from 'ramda/src/equals';

import logComponent from '../../logComponent.js';
import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

import goodsFilter from '../../goodsFilter.js';

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
		const productsFiltered = goodsFilter(this.props.productsData, this.props.filterData, this.props.currentPage, this.props.goodsInPage);
		const productsFilteredMemo = memoizeData(productsFiltered);		
		
		return (
			<div className="productsPage">
				<Header />
				<FormFilter />
				<ListContainer productsFiltered={productsFilteredMemo} currentPage={this.props.currentPage}/>
				<Paginator amountPages={productsFilteredMemo.length}/>
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
