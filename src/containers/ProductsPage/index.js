import React from 'react';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

import './index.css';

export default class ProductsPage extends React.Component {
	
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
