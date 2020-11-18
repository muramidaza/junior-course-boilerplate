import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {initialState} from '../../loadData';

import * as Actions from './actions';
import * as ActionsFormFilter from '../FormFilter/actions';
import * as ActionsPaginator from '../Paginator/actions';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import FormFilter from '../FormFilter';
import Paginator from '../Paginator';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.props.loadInitData({productsData: initialState.productsData, 
			categoriesList: initialState.categoriesList, 
			goodsInPage: initialState.goodsInPage});
		this.props.changeMinPrice(initialState.minPrice);
		this.props.changeMaxPrice(initialState.maxPrice);
		this.props.changeMinDiscount(initialState.minDiscount);
		this.props.changeSelectedCategory(initialState.selectedCategory);
		this.props.changePage(0);
	}
	
	render() {
		console.log('render');
		//pushInBrowserHistory({minPrice: initialState.minPrice, maxPrice: initialState.maxPrice, minDiscount: initialState.minDiscount});
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

const mapDispatchToProps = (dispatch) => ({
		...bindActionCreators({...Actions, ...ActionsFormFilter, ...ActionsPaginator}, dispatch)
	})

export default connect(null, mapDispatchToProps)(App)
