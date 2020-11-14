import React from 'react';

import logComponent from '../../logComponent';

import './index.css';

export default class ButtonLimit extends logComponent {

	render() {
		return (
			<button type='button' onClick={this.props.handleClick} className={'paginator__buttonlimit'}>
				{this.props.innerText}
			</button>
		);
	}
}
