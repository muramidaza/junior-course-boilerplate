import React from 'react';

import './index.css';

export default class CartPage extends React.Component {

	render() {
		return (
			<div className="headerCart">
				<button className="headerCart__linkBack" onClick={this.props.onGoBack}>
					&#8592;
				</button>
				<span className="headerCart__label">Корзина</span>
			</div>
		);
	}
}