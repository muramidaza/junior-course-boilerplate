import React from 'react';
import { connect } from 'react-redux';

import { clearCart, dispatchCart } from './actions';
import {
	selectTotalGoodsInCart,
	selectTotalPriceInCart,
	selectCartData,
	selectCartDispatchingStart,
	selectCartDispatchingError,
	selectCartDispatchingSuccess,
} from '../../selectors';

import { API, SUB_PRICE_CONTENT } from '../../config';

import ElementCart from '../../components/SVG/cart.svg';
import ElementDone from '../../components/SVG/done.svg';

import './index.css';

class Cart extends React.Component {
	handleDispatchCartButton = () => {
		this.props.handleDispatchCart(API.save, this.props.cartData);
	};

	successRender = () => {
		console.log(this.props.cartDispatchingSuccess);
		if(this.props.cartDispatchingSuccess) return (
			<img src={ElementDone} alt="done" className="done__svgElement" />
		)
	}
	
	errorRender = () => {
		if(this.props.cartDispatchingError) return (
			<p className="cart__conditionError">Ошибка: {this.props.cartDispatchingError}</p>
		)	
	}

	render() {
		return (
			<div className="cart">
				<div className="cart__header">
					<img src={ElementCart} alt="cart" className="cart__svgElement" />
					<span className="cart__label">Корзина</span>
					{this.successRender()}
				</div>
				<div className="cart__data">
					<p className="cart__counter">{'Товаров ' + this.props.totalGoodsInCart}</p>
					<p className="cart__price">{'Всего ' + this.props.totalPriceInCart + SUB_PRICE_CONTENT}</p>
				</div>
				<div className="cart__condition">
					{this.errorRender()}
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
		totalPriceInCart: selectTotalPriceInCart(store),
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
