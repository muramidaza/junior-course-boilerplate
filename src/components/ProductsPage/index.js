import React from 'react';

import equals from 'ramda/src/equals';

import logComponent from '../../logComponent.js';
import {ShopContext} from '../../ShopContext.js'
import Header from '../Header';
import ProductsList from '../ProductsList';
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
		const productsToShow = getProductsToShow(filteredByDiscountProducts);

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

export default function ContextProductPage(props) {
    return (
		<ShopContext.Consumer>
			{({minPrice, maxPrice, minDiscount}) => <ProductsPage {...props} minPrice={minPrice} maxPrice={maxPrice} minDiscount={minDiscount} />}
		</ShopContext.Consumer>
	);
};



