import React from 'react';

import logComponent from '../../logComponent.js';

import './index.css';

export default class ResetButton extends logComponent {
	
	render() {
		return (
			<button onClick={this.props.handleResetFilters} className={'resetButton'}>Сбросить фильтры</button>
		);
	};
};