import React from 'react';
import { connect } from 'react-redux';

import { clearCart, dispatchCart } from './actions';
import {
	selectTotalGoodsInCart,
	selectCartData,
	selectCartDispatchingStart,
	selectCartDispatchingError,
	selectCartDispatchingSuccess,
} from '../../selectors';

import ElementCart from '../../components/SVG/cart.svg';
import ElementDone from '../../components/SVG/done.svg';

import './index.css';

class Cart extends React.Component {
	handleDispatchCartButton = () => {
		this.props.handleDispatchCart(this.props.urlSave, this.props.cartData);
	};

	render() {
		return (
			<div className="cart">
				<div className="cart__header">
					<img src={ElementCart} alt="cart" className="cart__svgElement" />
					<span className="cart__label">Корзина</span>
					<span className="cart__counter">{this.props.totalGoodsInCart}</span>
					{this.props.cartDispatchingSuccess && (
						<img src={ElementDone} alt="done" className="done__svgElement" />
					)}
				</div>
				<div className="cart__condition">
					{this.props.cartDispatchingError && (
						<p className="cart__conditionError">Ошибка</p>
					)}
				</div>
				<div className="cart_buttons">
					<button
						className="cart_buttonClear"
						onClick={this.props.handleClearCart}
						disabled={this.props.cartDispatchingStart}
					>
						Очистить
					</button>
					<button
						className="cart_buttonDispatch"
						onClick={this.handleDispatchCartButton}
						disabled={this.props.cartDispatchingStart || !this.props.totalGoodsInCart}
					>
						Сохранить
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		totalGoodsInCart: selectTotalGoodsInCart(store),
		cartData: selectCartData(store),

		cartDispatchingStart: selectCartDispatchingStart(store),
		cartDispatchingError: selectCartDispatchingError(store),
		cartDispatchingSuccess: selectCartDispatchingSuccess(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleDispatchCart: (url, cartData) => {
			dispatch(dispatchCart(url, cartData));
		},
		handleClearCart: () => {
			dispatch(clearCart());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
