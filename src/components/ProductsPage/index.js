import React from 'react';
import {logger, maxBy, minBy} from 'csssr-school-utils/lib/';

import {Header} from '../Header';
import {ProductsList} from '../ProductsList';
import {FormFilter} from '../FormFilter';

import './index.css';

const GOODS_IN_PAGE = 3;

const filterProductByPrice = (products, minPrice, maxPrice) => {
	const predicateFn = ({price}) => price >= minPrice && price <= maxPrice;
	return products.filter(predicateFn);
};

const getProductsToShow = (products) => products.slice(0, GOODS_IN_PAGE);

class ProductsPage extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			minPrice: minBy(x => x.price, this.props.productsData).price,
			maxPrice: maxBy(x => x.price, this.props.productsData).price
		};
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		logger.call(this, this.constructor.name, nextProps, nextState);
		return true;
	}
	
	handleChangeFilter = (data) => {
		this.setState({
			minPrice: data.minPrice, 
			maxPrice: data.maxPrice
		});
	}
	
	render() {
		const filteredProducts = filterProductByPrice(this.props.productsData, this.state.minPrice, this.state.maxPrice);
		const productsToShow = getProductsToShow(filteredProducts);
		
		return (
			<div className="productsPage">
				<Header />
				<FormFilter handleChangeFilter={this.handleChangeFilter} maxPrice={this.state.maxPrice} minPrice={this.state.minPrice} />
				<ProductsList productsToShow={productsToShow} />
			</div>
		);
	};
};

export {ProductsPage};
