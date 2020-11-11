import React from 'react';
import {connect} from 'react-redux';
import {changeMinPrice, changeMaxPrice, changeMinDiscount, changeSelectedCategory, resetFilters} from './actions'
import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory} from './selectors';
import {selectCategoriesList} from '../App/selectors';
import {changePage} from '../Paginator/actions'

import logComponent from '../../logComponent.js';
import ExtendInput from '../../ExtendInput.js';

import Discount from 'discount';
import Categories from '../../components/Categories';
import ResetButton from '../../components/ResetButton';
import InputNumber from '../../components/InputNumber';

import {resetInitialStateFilters} from '../../initialState.js'

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class LogExtendedInputDiscount extends ExtendedInputDiscount {
	shouldComponentUpdate = logComponent.prototype.shouldComponentUpdate;
};

class FormFilter extends logComponent {
	handleResetFilters = () => {
		window.history.pushState(null, 'Интернет-магазин', '/?');
		this.props.handleResetFilters(resetInitialStateFilters);
	};

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
					<Categories categoriesList={this.props.categoriesList} selectedCategory={this.props.selectedCategory} onChangeSelectedCategory={this.handleChangeCategory}/>
				</div>
				<div>
					<ResetButton onReset={this.handleResetFilters} />
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
			dispatch(changeMinPrice(value));
			dispatch(changePage(0));
		},
		handleChangeMaxPrice: (value) => {
			dispatch(changeMaxPrice(value));
			dispatch(changePage(0));
		},
		handleChangeMinDiscount: (value) => {
			dispatch(changeMinDiscount(value));
			dispatch(changePage(0));
		},
		handleChangeSelectedCategory: (value) => {
			dispatch(changeSelectedCategory(value));
			dispatch(changePage(0));
		},
		handleResetFilters: (filterData) => {
			dispatch(resetFilters(filterData));
			dispatch(changePage(0));
		}		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter)
