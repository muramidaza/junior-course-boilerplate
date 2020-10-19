import React from 'react';
import logger from 'csssr-school-utils/lib/logger';

import './index.css';

class FormFilter extends React.Component {
	constructor(props) {
		super(props);
		
		this.inputMinPrice = React.createRef();
		this.inputMaxPrice = React.createRef();		
	}
	
	handleFilterChange = (event) => {
		event.preventDefault();
		this.props.onChangeFilter({minPrice: this.inputMinPrice.current.value, maxPrice: this.inputMaxPrice.current.value});
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		logger.call(this, this.constructor.name, nextProps, nextState);
		return true
	}	
		
	render() {
		return (
			<div className="formFilter">
				<form onSubmit={this.handleFilterChange}>
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
