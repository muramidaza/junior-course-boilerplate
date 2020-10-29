import React from 'react';

import logComponent from '../../logComponent.js';
import ExtendInput from '../../ExtendInput.js';
import {ShopConsumer} from '../../ShopContext.js'
import InputNumber from '../InputNumber';

import Discount from 'discount';
import Categories from '../Categories';

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class LogExtendedInputDiscount extends ExtendedInputDiscount {
	shouldComponentUpdate = logComponent.prototype.shouldComponentUpdate;
};


class FormFilter extends logComponent {
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
						onChange={this.props.handleChangeDiscount}
					/>
				</div>
				<div>
					<p>Категории товаров</p>
					<Categories categoriesList={this.props.categoriesList} />
				</div>
				<div>
					<button onClick={this.props.handleResetFilters}>Сбросить фильтры</button>
				</div>
			</div>
		);
	};
};

export default function ContextFormFilter(props) {
    return (
		<ShopConsumer>
			{context => <FormFilter {...props} 
				minPrice={context.minPrice} maxPrice={context.maxPrice} minDiscount={context.minDiscount} categoriesList={context.categoriesList}
				handleChangeMinPrice={context.handleChangeMinPrice} handleChangeMaxPrice={context.handleChangeMaxPrice} handleChangeDiscount={context.handleChangeDiscount} handleResetFilters={context.handleResetFilters}/>}
		</ShopConsumer>
	);
};