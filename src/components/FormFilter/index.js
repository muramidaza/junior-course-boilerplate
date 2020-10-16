import React from 'react';
import logger from 'csssr-school-utils/lib/logger';

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
		this.props.changeFilter({minPrice: this.inputMinPrice.current.value, maxPrice: this.inputMaxPrice.current.value});
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		logger.call(this, this.constructor.name, nextProps, nextState);
		return true
	}	
		
	render() {
		return (
			<div className="formFilter">
				<form onSubmit={this.handleSubmit}>
					<p>Цена:</p>
					<div>
						от <input type="number" defaultValue={this.props.minPrice} ref={this.inputMinPrice} /> 
						до <input type="number" defaultValue={this.props.maxPrice} ref={this.inputMaxPrice} />
					</div>
					<input type="submit" value="Отправить" />
				</form>
			</div>
		);
	};
};

export {FormFilter};
