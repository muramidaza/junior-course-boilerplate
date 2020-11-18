import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {selectCurrentPage, selectAmountProducts, selectSelectedCategory} from '../../selectors'; 

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
					return (
						<NavLink activeClassName="active" to={'/' + this.props.selectedCategory + '/' + i} key={i}> {item + 1} </NavLink>
					)
				})}

				{this.state.section < this.paginatorLimit && <ButtonLimit innerText={'next'} handleClick={this.handleClickNext} />}
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		selectedCategory: selectSelectedCategory(store), //for make pathname
		currentPage: selectCurrentPage(store),
		amountProducts: selectAmountProducts(store),
	}
}

export default connect(mapStateToProps)(Paginator)
