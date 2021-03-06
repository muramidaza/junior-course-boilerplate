import React from 'react';
import { connect } from 'react-redux';

import ExtendInput from '../HOCExtendInput';

import {
	changeMinPrice,
	changeMaxPrice,
	changeMinDiscount,
	resetFilters,
} from '../../store/FormFilter/actions';

import {
	selectMinPrice,
	selectMaxPrice,
	selectMinDiscount,
	selectDefaultParams,
	selectSelectedCategory,
} from '../../store/FormFilter/selectors';

import { selectCategoriesList } from '../../store/App/selectors';

import Discount from 'discount';
import Categories from '../../components/Categories';
import ResetButton from '../../components/ResetButton';
import InputNumber from '../../components/InputNumber';

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class FormFilter extends React.Component {
	handleClickReset = () => {
		this.props.handleResetFilters(this.props.defaultParams);
	};

	render() {
		return (
			<div className="formFilter">
				<div className="formFilter__element">
					<p className="formFilter__labelPrice">Цена:</p>
					от
					<ExtendedInputPrice
						value={this.props.minPrice}
						onChange={this.props.handleChangeMinPrice}
					/>
					руб. <br />
					до
					<ExtendedInputPrice
						value={this.props.maxPrice}
						onChange={this.props.handleChangeMaxPrice}
					/>
					руб.
				</div>
				<div className="formFilter__element">
					<ExtendedInputDiscount
						title="Скидка"
						name="sale"
						value={this.props.minDiscount}
						onChange={this.props.handleChangeMinDiscount}
					/>
				</div>
				<div className="formFilter__element">
					<Categories
						categoriesList={this.props.categoriesList}
						selectedCategory={this.props.selectedCategory}
					/>
				</div>
				<div className="formFilter__element">
					<ResetButton onClickReset={this.handleClickReset} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		minPrice: selectMinPrice(store),
		maxPrice: selectMaxPrice(store),
		minDiscount: selectMinDiscount(store),
		defaultParams: selectDefaultParams(store),

		selectedCategory: selectSelectedCategory(store),
		categoriesList: selectCategoriesList(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleChangeMinPrice: value => {
			dispatch(changeMinPrice(value));
		},
		handleChangeMaxPrice: value => {
			dispatch(changeMaxPrice(value));
		},
		handleChangeMinDiscount: value => {
			dispatch(changeMinDiscount(value));
		},
		handleResetFilters: params => {
			dispatch(resetFilters(params));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
