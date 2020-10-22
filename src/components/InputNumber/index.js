import React from 'react';
import {logComponent} from '../../logComponent.js';

import './index.css';

class InputNumber extends logComponent {
	render() {
		return (
			<input className="inputNumber" type="text" value={this.props.value} onChange={this.props.onChange} />
		);
	};
};

export {InputNumber};
