import React from 'react';

import './index.css';

export default class ButtonLimit extends React.PureComponent {
	render() {
		return (
			<button
				type="button"
				onClick={this.props.handleClick}
				className={'paginator__buttonlimit'}
			>
				{this.props.innerText}
			</button>
		);
	}
}
