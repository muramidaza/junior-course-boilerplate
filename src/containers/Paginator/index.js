import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import pushInBrowserHistory from '../../pushInBrowserHistory';

import {changePage} from './actions';

import {selectCurrentPage, selectAmountProducts} from '../../selectors'; 

import Link from '../../components/Link/Link';
import ButtonLimit from '../../components/ButtonLimit/ButtonLimit';

import './index.css';

const PAGINATOR_LENGTH = 5;

class Paginator extends React.Component {

	handleClickPrev = () => {
		this.setState({section: this.state.section - 1});
	}

	handleClickNext = () => {
		this.setState({section: this.state.section + 1});
	}
	
	render() {
		this.state = {section: 0};
		const amount = this.props.amountProducts;
		
		this.arrPageNumbers = [];
		for(let i = 0, count = 0; count < amount; i++) {
			this.arrPageNumbers[i] = [];
			for(let j = 0; j < PAGINATOR_LENGTH && count < amount; j++, count++) {
				this.arrPageNumbers[i][j] = count;
			}
		}
		
		this.paginatorLimit = this.arrPageNumbers.length - 1;		
		
		return (
			<div className="paginator">
				{this.state.section > 0 && <ButtonLimit innerText={'prev'} handleClick={this.handleClickPrev} />}

				{this.arrPageNumbers[this.state.section].map((item, i) => {
					console.log('/' + this.props.selectedCategory + '/' + i);
					return (
						<NavLink activeClassName='selectedButton' to={'/' + this.props.selectedCategory + '/' + i} key={i}> {item} </NavLink>
					)
				})}

				{this.state.section < this.paginatorLimit && <ButtonLimit innerText={'next'} handleClick={this.handleClickNext} />}
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		selectedCategory: store.router.location.pathname.split('/')[1] ? store.router.location.pathname.split('/')[1] : 'all',
		currentPage: store.router.location.pathname.split('/')[2],
		amountProducts: selectAmountProducts(store)
	}
}

export default connect(mapStateToProps)(Paginator)
