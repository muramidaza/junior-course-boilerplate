import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import goodsFilter from '../../goodsFilter';
import pushInBrowserHistory from '../../pushInBrowserHistory';

import ProductsList from '../../components/ProductsList';

import { loadCountPages } from './actions';
import { addGood, deleteGood } from '../Cart/actions';

import {
	selectMinPrice,
	selectMaxPrice,
	selectMinDiscount,
	selectSelectedCategory,
	selectProductsData,
	selectGoodsInPage,
	selectCurrentPage,
	selectMaxRating,
	selectSubPriceContent,
	selectCartDispatchingStart,
	selectCartData
} from '../../selectors';

class ListContaiter extends React.Component {
	shouldComponentUpdate(nextProps) {
		let renderAllow = false;

		if (this.props.minPrice != nextProps.minPrice) renderAllow = true;
		if (this.props.maxPrice != nextProps.maxPrice) renderAllow = true;
		if (this.props.minDiscount != nextProps.minDiscount) renderAllow = true;
		if (this.props.currentPage != nextProps.currentPage) renderAllow = true;
		if (this.props.selectedCategory != nextProps.selectedCategory) renderAllow = true;
		if (this.props.cartData != nextProps.cartData) renderAllow = true;
		if (this.props.cartDispatchingStart != nextProps.cartDispatchingStart) renderAllow = true;

		if (renderAllow) {
			pushInBrowserHistory(
				{
					minPrice: nextProps.minPrice,
					maxPrice: nextProps.maxPrice,
					minDiscount: nextProps.minDiscount,
				},
				this.props.history
			);
			return true;
		}

		return false;
	}

	handleActionCart = (actionAdd, id) => {
		if(actionAdd) {
			this.props.handleAddGoodToCart(id);
		} else {
			this.props.handleDeleteGoodFromCart(id);
		}
	}

	render() {
		const preparedProductsData = goodsFilter(
			this.props.productsData,
			{
				minPrice: this.props.minPrice,
				maxPrice: this.props.maxPrice,
				minDiscount: this.props.minDiscount,
				selectedCategory: this.props.selectedCategory,
			},
			this.props.goodsInPage
		);

		const countPages = preparedProductsData.length || 0;

		this.props.handleLoadCountPages(countPages);

		const productInCurrentPage =
			preparedProductsData[this.props.currentPage] || [];

		return (
			<ProductsList
				products={productInCurrentPage}
				maxRating={this.props.maxRating}
				subPriceContent={this.props.subPriceContent}

				cartData={this.props.cartData}
				disabledButtons={this.props.cartDispatchingStart}
				handleActionCart={this.handleActionCart}
			/>
		);
	}
}

const mapStateToProps = store => {
	return {
		minPrice: selectMinPrice(store),
		maxPrice: selectMaxPrice(store),
		minDiscount: selectMinDiscount(store),

		productsData: selectProductsData(store),
		goodsInPage: selectGoodsInPage(store),
		maxRating: selectMaxRating(store),
		subPriceContent: selectSubPriceContent(store),

		currentPage: selectCurrentPage(store),
		selectedCategory: selectSelectedCategory(store),

		cartData: selectCartData(store),
		cartDispatchingStart: selectCartDispatchingStart(store)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLoadCountPages: countPages => {
			dispatch(loadCountPages(countPages));
		},
		handleAddGoodToCart: id => {
			dispatch(addGood(id));
		},
		handleDeleteGoodFromCart: id => {
			dispatch(deleteGood(id));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ListContaiter)
);
