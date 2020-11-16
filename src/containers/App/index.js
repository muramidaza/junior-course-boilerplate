import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {initialState} from '../../loadData';

import * as Actions from './actions';
import * as ActionsFormFilter from '../FormFilter/actions';
import * as ActionsPaginator from '../Paginator/actions';

import ProductsPage from '../ProductsPage';

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
		return (
			<ProductsPage />
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
		...bindActionCreators({...Actions, ...ActionsFormFilter, ...ActionsPaginator}, dispatch)
	})

export default connect(null, mapDispatchToProps)(App)
