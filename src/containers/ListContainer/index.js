import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import goodsFilter from '../../goodsFilter';
import pushInBrowserHistory from '../../pushInBrowserHistory';

import ProductsList from '../../components/ProductsList';

import { loadCountPages } from './actions';
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
} from '../../selectors';

class ListContaiter extends React.Component {
	shouldComponentUpdate(nextProps) {
		let renderAllow = false;

		if (this.props.minPrice != nextProps.minPrice) renderAllow = true;
		if (this.props.maxPrice != nextProps.maxPrice) renderAllow = true;
		if (this.props.minDiscount != nextProps.minDiscount) renderAllow = true;
		if (this.props.currentPage != nextProps.currentPage) renderAllow = true;
		if (this.props.selectedCategory != nextProps.selectedCategory)
			renderAllow = true;

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
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLoadCountPages: countPages => {
			dispatch(loadCountPages(countPages));
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ListContaiter)
);
