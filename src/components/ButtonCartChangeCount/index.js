import React from 'react';

import './index.css';

export default class ButtonCartChangeCount extends React.PureComponent {
	onClickButton = () => {
		this.props.handleClickButton(
			this.props.productID,
			this.props.productsCount
		);
	};

	render() {
		return (
			<button
				type="button"
				onClick={this.onClickButton}
				className="buttonCartChangeCount"
				disabled={this.props.disabled}
			>
				{this.props.innerText}
			</button>
		);
	}
}
