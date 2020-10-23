import React from 'react';
import {logComponent} from '../../logComponent.js';
import ExtendInput from '../../ExtendInput.js';

import {InputNumber} from '../InputNumber';

import Discount from 'discount';

import logger from 'csssr-school-utils/lib/logger';
import shallowCompare from 'react-addons-shallow-compare';

import './index.css';

const ExtendedInputPrice = ExtendInput(InputNumber);
const ExtendedInputDiscount = ExtendInput(Discount);

class LogExtendedInputDiscount extends ExtendedInputDiscount {

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Discount');
		console.log(nextProps);
		console.log(this.props);
		console.log(nextState);
		console.log(this.state);

		logger.call(this, this.constructor.name, nextProps, nextState);
		return shallowCompare(this, nextProps, nextState);
	}

};


class FormFilter extends logComponent {
	constructor(props) {
		super(props);

		this.data = {
			minPrice: this.props.minPrice,
			maxPrice: this.props.maxPrice,
			minDiscount: this.props.minDiscount
		}
	}
	
	handleChangeMinPrice = (number) => {
		this.data.minPrice = number;
		this.props.onChangeFilter(this.data);
	}
	
	handleChangeMaxPrice = (number) => {
		this.data.maxPrice = number;
		this.props.onChangeFilter(this.data);
	}
	
	handleChangeDiscount = (number) => {
		this.data.minDiscount = number;
		this.props.onChangeFilter(this.data);
	}	
		
	render() {
		return (
			<div className="formFilter">
				<div>
					<p>Цена:</p>
					<div>
						от <ExtendedInputPrice value={this.props.minPrice} onChange={this.handleChangeMinPrice} /> 
						до <ExtendedInputPrice value={this.props.maxPrice} onChange={this.handleChangeMaxPrice} />
					</div>
				</div>
				<div>
					<p>Скидка:</p>
					<div>
						<LogExtendedInputDiscount 
							title="Скидка" 
							name="sale" 
							value={this.data.minDiscount} 
							onChange={this.handleChangeDiscount}
						/>
					</div>
				</div>
			</div>
		);
	};
};

export {FormFilter};
