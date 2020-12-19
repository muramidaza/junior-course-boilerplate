import React from 'react';

import './index.css';

export default class ButtonCartDecrease extends React.PureComponent {
	onHandleClick = () => {
		this.props.onChangeProductsCount(
			this.props.productID,
			this.props.productsCount - 1
		);
	};

	render() {
		return (
			<button
				type="button"
				onClick={this.onHandleClick}
				className="buttonCartDecrease"
				disabled={this.props.disabled}
			>
				-
			</button>
		);
	}
}
