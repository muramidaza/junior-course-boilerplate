import React from 'react';
import {logComponent} from '../../logComponent.js';

import './index.css';

	
function checkNumber(str) {
	const reg = new RegExp('^[0-9]+$');
	return reg.test(str);
}

class InputNumber extends logComponent {
	constructor(props) {
		super(props);
		
		this.prevValue = this.props.value;
	}

	handleChange = (event) => {
		let str = event.target.value;
		
		//если инпут пустой - ничего не делаем, если была введена не цифра - возвращаем предыдущее значение в инпут, если введены только натуральное число - то передаем в обработчик
		if(str.length > 0) {
			if(checkNumber(str)) {
				this.prevValue = str;
				this.props.onChange(+str);
			} else {
				event.target.value = this.prevValue;
			}
		}
		
		event.preventDefault();
	}
		
	render() {
		return (
			<input className="inputNumber" type="text" defaultValue={this.props.value} onChange={this.handleChange} />
		);
	};
};

export {InputNumber};
