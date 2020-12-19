import React from 'react';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';
import Cart from '../Cart';

import './index.css';

export default class CatalogPage extends React.Component {
	render() {
		return (
			<div className="catalogPage">
				<div className="catalogPage__headerSection">
					<Header />
				</div>
				<div className="catalogPage__mainSection">
					<div className="catalogPage__filterSection">
						<FormFilter />
					</div>
					<div className="catalogPage__productsSection">
						<ListContainer />
						<Paginator />
					</div>
					<div className="catalogPage__cartSection">
						<Cart />
					</div>
				</div>
			</div>
		);
	}
}
