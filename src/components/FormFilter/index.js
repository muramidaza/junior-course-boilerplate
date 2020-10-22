import React from 'react';
import {logComponent} from '../../logComponent.js';

import './index.css';

class FormFilter extends logComponent {
	constructor(props) {
		super(props);
		
		this.inputMinPrice = React.createRef();
		this.inputMaxPrice = React.createRef();		
	}
	
	onFilterSubmit = (event) => {
		event.preventDefault();
		this.props.onChangeFilter({minPrice: this.inputMinPrice.current.value, maxPrice: this.inputMaxPrice.current.value});
	}
		
	render() {
		return (
			<div className="formFilter">
				<form onSubmit={this.onFilterSubmit}>
					<p>Цена:</p>
					<div>
						от <input type="number" min="0" className="inputPrice" defaultValue={this.props.minPrice} ref={this.inputMinPrice} /> 
						до <input type="number" min="0" className="inputPrice" defaultValue={this.props.maxPrice} ref={this.inputMaxPrice} />
					</div>
					<button type="submit">Отправить</button>
				</form>
			</div>
		);
	};
};

export {FormFilter};
