import React from 'react';
import {logComponent} from '../../logComponent.js';

import {InputNumber} from '../InputNumber';

import Discount from 'discount';

import './index.css';

class FormFilter extends logComponent {
	constructor(props) {
		super(props);

		this.data = {
			minPrice: this.props.minPrice,
			maxPrice: this.props.maxPrice,
			minDiscount: this.props.defaultDiscount
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
	
	handleChangeDiscount = (event) => {
		this.data.minDiscount = +event.target.value;
		event.target.value = this.data.minDiscount;
		this.props.onChangeFilter(this.data);
	}	
		
	render() {
		return (
			<div className="formFilter">
				<div>
					<p>Цена:</p>
					<div>
						от <InputNumber defaultValue={this.props.minPrice} onChangeNumber={this.handleChangeMinPrice}/> 
						до <InputNumber defaultValue={this.props.maxPrice} onChangeNumber={this.handleChangeMaxPrice}/>
					</div>
				</div>
				<div>
					<p>Скидка:</p>
					<div>
						<Discount 
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
