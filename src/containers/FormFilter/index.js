import React from 'react';
import {connect} from 'react-redux';

import logComponent from '../../logComponent';
import ExtendInput from '../../ExtendInput';

import pushInBrowserHistory from '../../pushInBrowserHistory';
import {resetInitialStateFilters} from '../../loadData';

import {changeMinPrice, changeMaxPrice, changeMinDiscount, changeSelectedCategory, resetFilters} from './actions';
import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory} from './selectors';
import {selectCategoriesList} from '../App/selectors';
import {changePage} from '../Paginator/actions';

import Discount from 'discount';
import Categories from '../../components/Categories';
import ResetButton from '../../components/ResetButton';
import InputNumber from '../../components/InputNumber';

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class LogExtendedInputDiscount extends ExtendedInputDiscount {
	shouldComponentUpdate = logComponent.prototype.shouldComponentUpdate;
};

class FormFilter extends logComponent {
	handleChangeCategory = (event) => {
		this.props.handleChangeSelectedCategory(event.target.value);
	};
		
	render() {

		return (
			<div className="formFilter">
				<div>
					<p>Цена:</p>
					от <ExtendedInputPrice value={this.props.minPrice} onChange={this.props.handleChangeMinPrice} /> 
					до <ExtendedInputPrice value={this.props.maxPrice} onChange={this.props.handleChangeMaxPrice} />
				</div>
				<div>
					<p>Скидка:</p>
					<LogExtendedInputDiscount 
						title="Скидка" 
						name="sale" 
						value={this.props.minDiscount} 
						onChange={this.props.handleChangeMinDiscount}
					/>
				</div>
				<div>
					<p>Категории товаров</p>
					<Categories categoriesList={this.props.categoriesList} selectedCategory={this.props.selectedCategory} onChangeSelectedCategory={this.props.handleChangeCategory}/>
				</div>
				<div>
					<ResetButton onReset={this.props.handleResetFilters} />
				</div>
			</div>
			
		);
	};
};

const mapStateToProps = (store) => {
	return {
		minPrice: selectMinPrice(store),
		maxPrice: selectMaxPrice(store),
		minDiscount: selectMinDiscount(store),
		selectedCategory: selectSelectedCategory(store),
		categoriesList: selectCategoriesList(store)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeMinPrice: (value) => {
			pushInBrowserHistory({minPrice: value, currentPage: 0});
			dispatch(changeMinPrice(value));
			dispatch(changePage(0));
		},
		handleChangeMaxPrice: (value) => {
			pushInBrowserHistory({maxPrice: value, currentPage: 0});
			dispatch(changeMaxPrice(value));
			dispatch(changePage(0));
		},
		handleChangeMinDiscount: (value) => {
			pushInBrowserHistory({minDiscount: value, currentPage: 0});
			dispatch(changeMinDiscount(value));
			dispatch(changePage(0));

		},
		handleChangeSelectedCategory: (value) => {
			pushInBrowserHistory({selectedCategory: value, currentPage: 0});			
			dispatch(changeSelectedCategory(value));
			dispatch(changePage(0));

		},
		handleResetFilters: () => {
			pushInBrowserHistory(null);			
			dispatch(resetFilters(resetInitialStateFilters));
			dispatch(changePage(0));

		}		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter)
