import React from 'react';
import logger from 'logger';

import {Header} from '../Header/index.js';
import {ProductsList} from '../ProductsList/index.js';
import {FormFilter} from '../FormFilter/index.js';

import './index.css';

const GOODS_IN_PAGE = 3;

class ProductsPage extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			filterData: {
				minPrice: 0,
				maxPrice: this.props.productsData.reduce(
						(maxValue, elem) => {return elem.price > maxValue ? elem.price : maxValue;}, 
					0)
			}
		}
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log(logger);
		//logger.call(this, this.constructor.name, nextProps, nextState);
		return true
	}
	
	changeFilter = (data) => {
		this.setState({
			filterData: {
				minPrice: data.minPrice, 
				maxPrice: data.maxPrice
			}
		});
	}
	
	render() {
		const productsData = this.props.productsData.filter(
			(elem) => {return elem.price >= this.state.filterData.minPrice && elem.price <= this.state.filterData.maxPrice;}
		).slice(0, GOODS_IN_PAGE);
		
		
		
		return (
			<div className="productsPage">
				<Header />
				<FormFilter changeFilter={this.changeFilter} maxPrice={this.state.filterData.maxPrice} />
				<ProductsList productsData={productsData} />
			</div>
		);
	};
};

export {ProductsPage};
