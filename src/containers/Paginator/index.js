import React from 'react';
import {connect} from 'react-redux';
import {changePage} from './actions';
import {selectCurrentPage} from './selectors.js'; 

import logComponent from '../../logComponent.js';
import Link from './Link.js';
import ButtonLimit from './ButtonLimit.js';

import './index.css';

const PAGINATOR_LENGTH = 5;

class Paginator extends logComponent {
	constructor (props) {
		super(props);
		
		this.state = {section: 0};
		const amount = this.props.amountPages;
		
		this.arrPageNumbers = [];
		for(let i = 0, count = 0; count < amount; i++) {
			this.arrPageNumbers[i] = [];
			for(let j = 0; j < PAGINATOR_LENGTH && count < amount; j++, count++) {
				this.arrPageNumbers[i][j] = count;
			}
		}
		this.paginatorLimit = this.arrPageNumbers.length - 1;		
	}
	
	handleLinkClick = (event) => {
		event.preventDefault();
		this.props.handleChangePage(+event.target.dataset.currentpage);
	}
	
	handleClickPrev = () => {
		this.setState({section: this.state.section - 1});
	}

	handleClickNext = () => {
		this.setState({section: this.state.section + 1});
	}
	
	render() {
		return (
			<div className="paginator">
				{this.state.section > 0 && (<ButtonLimit innerText={'prev'} handleClick={this.handleClickPrev} />)}
				{this.arrPageNumbers[this.state.section].map((item, i) => {
					return (
						<Link currentPage={this.props.currentPage} numPage={item} key={i} handleLinkClick={this.handleLinkClick}/>
					)
				})}
				{this.state.section < this.paginatorLimit && (<ButtonLimit innerText={'next'} handleClick={this.handleClickNext} />)}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangePage: (value) => {
			dispatch(changePage(value))
		}
	}
}

const mapStateToProps = (state) => {
	return {
		currentPage: selectCurrentPage(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator)
