import React from 'react';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

import './index.css';

export default class App extends React.Component {
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
					<div className="catalogPage__goodsSection">
						<ListContainer />
						<Paginator />
					</div>
				</div>
			</div>
		);
	}
}
