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

		if(this.inputMinPrice.current.value >= 0) 
			this.minPrice = this.inputMinPrice.current.value;
		else
			this.inputMinPrice.current.value = 0;
		
		if(this.inputMaxPrice.current.value <= this.props.maxPrice $$ this.inputMaxPrice.current.value >= 0) 
			this.maxPrice = this.inputMaxPrice.current.value = this.props.maxPrice;
		else
			this.inputMaxPrice.current.value = this.props.maxPrice;
		
		this.props.changeFilter({minPrice: this.minPrice, maxPrice: this.maxPrice});
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
