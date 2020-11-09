import React from 'react';
import {connect} from 'react-redux';

import equals from 'ramda/src/equals';

import logComponent from '../../logComponent.js';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import FormFilter from '../FormFilter';

import './index.css';

const GOODS_IN_PAGE = 3;

const filterProductByPrice = (products, minPrice, maxPrice) => {
	const predicateFn = ({price}) => price >= minPrice && price <= maxPrice;
	return products.filter(predicateFn);
};

const filterProductByDiscount = (products, minDiscount) => {
	const predicateFn = ({discount}) => discount >= minDiscount;
	return products.filter(predicateFn);
};

const filterProductByCategory = (products, selectedCategory) => {
	if(selectedCategory === null) return products;
	const predicateFn = ({category}) => category == selectedCategory;
	return products.filter(predicateFn);
};

const getProductsToShow = (products) => products.slice(0, GOODS_IN_PAGE);

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
		const filteredByPriceProducts = filterProductByPrice(this.props.productsData, this.props.minPrice, this.props.maxPrice);
		const filteredByDiscountProducts = filterProductByDiscount(filteredByPriceProducts, this.props.minDiscount);
		const filteredByCategoryProducts = filterProductByCategory(filteredByDiscountProducts, this.props.selectedCategory);
		const productsToShow = getProductsToShow(filteredByCategoryProducts);

		const productsToShowMemo = memoizeData(productsToShow);		
		
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
		minPrice: store.minPrice,
		maxPrice: store.maxPrice,
		minDiscount: store.minDiscount,
		productsData: store.productsData,
		selectedCategory: store.selectedCategory
	}
}

export default connect(mapStateToProps)(ProductsPage)
