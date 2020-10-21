import React from 'react';
import {logComponent} from '../../logComponent.js';

import {maxBy, minBy} from 'csssr-school-utils/lib/';

import {Header} from '../Header';
import {ProductsList} from '../ProductsList';
import {FormFilter} from '../FormFilter';

import './index.css';

const GOODS_IN_PAGE = 3;
const DEFAULT_DISCOUNT = 0;

const filterProductByPrice = (products, minPrice, maxPrice) => {
	const predicateFn = ({price}) => price >= minPrice && price <= maxPrice;
	return products.filter(predicateFn);
};

const filterProductByDiscount = (products, minDiscount) => {
	const predicateFn = ({discount}) => discount >= minDiscount;
	return products.filter(predicateFn);
};

const getProductsToShow = (products) => products.slice(0, GOODS_IN_PAGE);

class ProductsPage extends logComponent {
	constructor (props) {
		super(props);
		
		this.state = {
			minPrice: minBy(x => x.price, this.props.productsData).price,
			maxPrice: maxBy(x => x.price, this.props.productsData).price,
			minDiscount: DEFAULT_DISCOUNT
		};
	}
	
	handleChangeFilter = (data) => {
		console.log(data);
		this.setState({
			minPrice: data.minPrice, 
			maxPrice: data.maxPrice,
			minDiscount: data.minDiscount
		});
	}
	
	render() {
		const filteredByPriceProducts = filterProductByPrice(this.props.productsData, this.state.minPrice, this.state.maxPrice);
		const filteredByDiscountProducts = filterProductByDiscount(filteredByPriceProducts, this.state.minDiscount);
		const productsToShow = getProductsToShow(filteredByDiscountProducts);
		
		return (
			<div className="productsPage">
				<Header />
				<FormFilter 
					onChangeFilter={this.handleChangeFilter} 
					maxPrice={this.state.maxPrice} 
					minPrice={this.state.minPrice} 
					defaultDiscount={DEFAULT_DISCOUNT} 
				/>
				<ProductsList productsToShow={productsToShow} />
			</div>
		);
	};
};

export {ProductsPage};
