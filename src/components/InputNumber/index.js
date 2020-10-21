import React from 'react';
import {logComponent} from '../../logComponent.js';

import './index.css';

class InputNumber extends logComponent {

	handleChange = (event) => {
		this.props.onChangeNumber(+event.target.value);
		event.preventDefault();
	}
		
	render() {
		return (
			<input className="inputNumber" type="number" min={this.props.minValue} defaultValue={this.props.defaultValue} onChange={this.handleChange} />
		);
	};
};

export {InputNumber};
