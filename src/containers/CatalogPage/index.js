import React from 'react';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

export default class App extends React.Component {
	render() {
		return (
			<div className="catalogPage">
				<Header />
				<FormFilter />
				<ListContainer />
				<Paginator />
			</div>
		);
	};
};
