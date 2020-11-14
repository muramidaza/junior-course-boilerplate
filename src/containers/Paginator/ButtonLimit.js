import React from 'react';

import logComponent from '../../logComponent';

export default class ButtonLimit extends logComponent {

	render() {
		return (
			<button onClick={this.props.handleClick} className={'paginator__buttonlimit'}>
				{this.props.innerText}
			</button>
		);
	}
}
