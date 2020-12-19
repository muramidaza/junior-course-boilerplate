import React from 'react';

import './index.css';

export default class ButtonCartIncrease extends React.PureComponent {
	onHandleClick = () => {
		this.props.onChangeGoodsCount(this.props.goodID, this.props.goodsCount + 1)
	}

	render() {
		return (
			<button
				type="button"
				onClick={this.onHandleClick}
				className="buttonCartIncrease"
				disabled={this.props.disabled}
			>
				+
			</button>
		);
	}
}
