import React from 'react';

import './index.css';

export default class InputNumber extends  React.PureComponent {
	render() {
		return (
			<input className="inputNumber" type="text" value={this.props.value} onChange={this.props.onChange} />
		);
	};
};
