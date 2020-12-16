import React from 'react';

import './index.css';

export default class ButtonCart extends React.PureComponent {
	handleClick = () => {
		this.props.handleActionCart(this.props.actionAdd, this.props.goodID);
	};

	render() {
		return (
			<button
				type="button"
				onClick={this.handleClick}
				className={this.props.actionAdd ? 'buttonCartAdd' : 'buttonCartDel'}
				disabled={this.props.disabled}
			>
				{this.props.actionAdd ? 'Добавить' : 'Удалить'}
			</button>
		);
	}
}
