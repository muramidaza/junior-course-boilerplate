import React from 'react';

import logComponent from '../../logComponent.js';
import ExtendInput from '../../ExtendInput.js';
import {ShopContext} from '../../ShopContext.js'
import InputNumber from '../InputNumber';

import Discount from 'discount';

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class LogExtendedInputDiscount extends ExtendedInputDiscount {
	shouldComponentUpdate = logComponent.prototype.shouldComponentUpdate;
};


class FormFilter extends logComponent {
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
						onChange={this.props.handleChangeDiscount}
					/>
				</div>
			</div>
		);
	};
};

export default function ContextFormFilter(props) {
    return (
		<ShopContext.Consumer>
			{(minPrice, maxPrice, minDiscount, handleChangeMinPrice, handleChangeMaxPrice, handleChangeDiscount) => <FormFilter {...props} 
				minPrice={minPrice} maxPrice={maxPrice} minDiscount={minDiscount} 
				handleChangeMinPrice={handleChangeMinPrice} handleChangeMaxPrice={handleChangeMaxPrice} handleChangeDiscount={handleChangeDiscount} />}
		</ShopContext.Consumer>
	);
};