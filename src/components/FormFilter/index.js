import React from 'react';

import './index.css';

class FormFilter extends React.Component {
	constructor(props) {
		super(props); 
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.inputMinPrice = React.createRef();
		this.inputMaxPrice = React.createRef();
		
		this.minPrice = 0;
		this.maxPrice = this.props.maxPrice;
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		
		let minPrice = this.minPrice;
		let maxPrice = this.maxPrice;
		
		//если значение прошло проверку записывам в переменную значение, если нет - то записывам в инпут правильное значение
		if(this.inputMinPrice.current.value >= 0) 
			minPrice = this.inputMinPrice.current.value;
		else
			this.inputMinPrice.current.value = minPrice;
		
		if(this.inputMaxPrice.current.value <= this.props.maxPrice && this.inputMaxPrice.current.value >= 0) 
			maxPrice = this.inputMaxPrice.current.value;
		else
			this.inputMaxPrice.current.value = maxPrice;
		
		this.props.changeFilter({minPrice: minPrice, maxPrice: maxPrice});
	}
		
	render() {
		return (
			<div className="formFilter">
				<form onSubmit={this.handleSubmit}>
					<p>Цена:</p>
					<div>
						от <input type="number" defaultValue={this.minPrice} ref={this.inputMinPrice} /> 
						до <input type="number" defaultValue={this.maxPrice} ref={this.inputMaxPrice} />
					</div>
					<input type="submit" value="Отправить" />
				</form>
			</div>
		);
	};
};

export {FormFilter};
