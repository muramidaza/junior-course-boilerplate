import React from 'react';

import {Header} from '../Header/index.js';
import {ProductsList} from '../ProductsList/index.js';

import './index.css';

const GOOD_IN_PAGE = 3;

class ProductsPage extends React.Component {
	render() {
		const productsChunk = this.props.productsData.slice(0, GOOD_IN_PAGE);
		return (
			<div className="productsPage">
				<Header />
				<ProductsList productsChunk={productsChunk} />
			</div>
		);
	};
};

export {ProductsPage};
