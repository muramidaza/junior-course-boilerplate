import React from 'react';

import './index.css';

export default class ResetButton extends React.PureComponent {
	
	render() {
		return (
			<button type='reset' onClick={this.props.onReset} className={'resetButton'}>Сбросить фильтры</button>
		);
	};
};
