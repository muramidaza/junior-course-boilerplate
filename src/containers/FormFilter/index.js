import React from 'react';
import {connect} from 'react-redux';
import {changeMinPrice, changeMaxPrice, changeMinDiscount} from '../../actions'

import logComponent from '../../logComponent.js';
import ExtendInput from '../../ExtendInput.js';

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
	handleCategoryChange = (event) => {
		window.location.search = 'category=' + event.target.value;
	}

	handleResetFilters = () => {
		window.location.search = '';
	};

	render() {
		console.log(this.props);
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
					<Categories categoriesList={this.props.categoriesList} selectedCategory={this.props.selectedCategory} handleCategoryChange={this.handleCategoryChange}/>
				</div>
				<div>
					<ResetButton onClick={this.handleResetFilters} />
				</div>
			</div>
			
		);
	};
};

const mapStateToProps = (store) => {
	return {
		minPrice: store.minPrice,
		maxPrice: store.maxPrice,
		minDiscount: store.minDiscount,
		productsData: store.productsData,
		selectedCategory: store.selectedCategory,
		categoriesList: store.categoriesList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeMinPrice: (value) => {
			dispatch(changeMinPrice(value))
		},
		handleChangeMaxPrice: (value) => {
			dispatch(changeMaxPrice(value))
		},
		handleChangeMinDiscount: (value) => {
			dispatch(changeMinDiscount(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter)