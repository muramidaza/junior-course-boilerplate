import React from 'react';
import {connect} from 'react-redux';

import ExtendInput from '../../ExtendInput';

import pushInBrowserHistory from '../../pushInBrowserHistory';

import {changeMinPrice, changeMaxPrice, changeMinDiscount} from './actions';

import {selectMinPrice, selectMaxPrice, selectMinDiscount, selectSelectedCategory, selectCategoriesList} from '../../selectors';

import Discount from 'discount';
import Categories from '../../components/Categories';
import ResetButton from '../../components/ResetButton';
import InputNumber from '../../components/InputNumber';

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class FormFilter extends React.Component {

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
					<ExtendedInputDiscount 
						title="Скидка" 
						name="sale" 
						value={this.props.minDiscount} 
						onChange={this.props.handleChangeMinDiscount}
					/>
				</div>
				<div>
					<p>Категории товаров</p>
					<Categories categoriesList={this.props.categoriesList} selectedCategory={this.props.selectedCategory}/>
				</div>
				<div>
					<ResetButton />
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
			pushInBrowserHistory({minPrice: value});
			dispatch(changeMinPrice(value));
		},
		handleChangeMaxPrice: (value) => {
			pushInBrowserHistory({maxPrice: value});
			dispatch(changeMaxPrice(value));
		},
		handleChangeMinDiscount: (value) => {
			pushInBrowserHistory({minDiscount: value});
			dispatch(changeMinDiscount(value));
		}		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter)
