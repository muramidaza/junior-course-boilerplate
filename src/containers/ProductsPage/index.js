import React from 'react';

import logComponent from '../../logComponent';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

import './index.css';

export default class ProductsPage extends logComponent {
	
	render() {
		return (
			<div className="productsPage">
				<Header />
				<FormFilter />
				<ListContainer />
				<Paginator />
			</div>
		);
	};
};

