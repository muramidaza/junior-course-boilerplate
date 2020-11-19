import React from 'react';
import {connect} from 'react-redux';

import goodsFilter from '../../goodsFilter';
import pushInBrowserHistory from '../../pushInBrowserHistory';

import ProductsList from '../../components/ProductsList';

import {loadCountPages} from './actions';
import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory, selectProductsData, selectGoodsInPage, selectCurrentPage} from '../../selectors';

import './index.css';

class ListContaiter extends React.Component {
	render() {
		pushInBrowserHistory({minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount});
		
		const preparedProductsData = goodsFilter(this.props.productsData, 
			{minPrice: this.props.minPrice, maxPrice: this.props.maxPrice, minDiscount: this.props.minDiscount, selectedCategory: this.props.selectedCategory}, 
			this.props.goodsInPage);

		this.props.handleLoadCountPages(preparedProductsData.length);
		
		const productInCurrentPage = preparedProductsData[this.props.currentPage] ? preparedProductsData[this.props.currentPage] : [];
		
		return (
			<ProductsList products={productInCurrentPage}/>
		);
	};
};

const mapStateToProps = (store) => {
	return {
		minPrice: selectMinPrice(store),
		maxPrice: selectMaxPrice(store),
		minDiscount: selectMinDiscount(store),
		
		productsData: selectProductsData(store),
		goodsInPage: selectGoodsInPage(store),
		
		currentPage: selectCurrentPage(store),
		selectedCategory: selectSelectedCategory(store)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoadCountPages: (countPages) => {
			dispatch(loadCountPages(countPages));
		}		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContaiter)
