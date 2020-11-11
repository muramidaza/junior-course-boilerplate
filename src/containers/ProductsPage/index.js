import React from 'react';
import {connect} from 'react-redux';

import equals from 'ramda/src/equals';

import logComponent from '../../logComponent';
import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

import goodsFilter from '../../goodsFilter';
import pushInBrowserHistory from '../../pushInBrowserHistory'
import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory} from '../FormFilter/selectors'
import {selectProductsData, selectGoodsInPage} from '../App/selectors';
import {selectCurrentPage} from  '../Paginator/selectors'

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
		pushInBrowserHistory({minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount, 
			selectedCategory: this.props.selectedCategory, currentPage: this.props.currentPage});
		const productsFiltered = goodsFilter(this.props.productsData, 
			{minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount, selectedCategory: this.props.selectedCategory}, 
			this.props.goodsInPage);
		const productsFilteredMemo = memoizeData(productsFiltered);		
		
		return (
			<div className="productsPage">
				<Header />
				<FormFilter />
				<ListContainer productsFiltered={productsFilteredMemo} currentPage={this.props.currentPage}/>
				<Paginator amountPages={productsFilteredMemo.length} currentPage={this.props.currentPage}/>
			</div>
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

export default connect(mapStateToProps)(ProductsPage)
