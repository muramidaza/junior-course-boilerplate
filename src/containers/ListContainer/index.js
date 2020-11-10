import React from 'react';
import logComponent from '../../logComponent.js';
import ProductsList from '../../components/ProductsList'

import './index.css';

export default class ListContaiter extends logComponent {
	
	render() {
		const productsInCurrentPage = this.props.productsFiltered[this.props.currentPage]
		const productsToShow =  productsInCurrentPage ? productsInCurrentPage : [];
		
		return (
			<ProductsList productsToShow={productsToShow} />
		);
	};
};

