import React from 'react';

import './index.css';

class FormFilter extends React.Component {
	constructor(props) {
		super(props); 
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.inputMinPrice = React.createRef();
		this.inputMaxPrice = React.createRef();		
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		if(this.inputMinPrice.current.value < 0) this.inputMinPrice.current.value = 0;
		if(this.inputMaxPrice.current.value >= this.props.maxPrice) this.inputMaxPrice.current.value = this.props.maxPrice;
		this.props.changeFilter({minPrice: this.inputMinPrice.current.value, maxPrice: this.inputMaxPrice.current.value});
	}
		
	render() {
		return (
			<div className="formFilter">
				<form onSubmit={this.handleSubmit}>
					<p>Цена:</p>
					<div>
						от <input type="number" defaultValue="0" ref={this.inputMinPrice} /> 
						до <input type="number" defaultValue={this.props.maxPrice} ref={this.inputMaxPrice} />
					</div>
					<input type="submit" value="Отправить" />
				</form>
			</div>
		);
	};
};

export {FormFilter};
