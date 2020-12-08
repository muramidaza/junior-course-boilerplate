import React from 'react';
import { connect } from 'react-redux';

import { clearCart, dispatchCart } from './actions';
import { selectTotalGoodsInCart, selectCartData, selectCartDispatchingStart, selectCartDispatchingError, selectCartDispatchingSuccess } from '../../selectors';

import './index.css';

const urlSave = 'https://course-api.csssr.school/save';

class Cart extends React.Component {
	
	handleDispatchCartButton = () => {
		this.props.handleDispatchCart(urlSave, this.props.cartData);
	}
	
	render() {
		return (
			<div className='cart'>
				<div className='cart__header'>
					<span className='cart__label'>Корзина</span>
					<span className='cart__counter'>{this.props.totalGoodsInCart}</span>
				</div>					
				<div className='cart__condition'>
					{ (!this.props.cartDispatchingStart && !this.props.cartDispatchingSuccess && this.props.totalGoodsInCart > 0) && 
						<p className='cart__conditionStart'>Не сохранено</p> }
					{ this.props.cartDispatchingStart && <p className='cart__conditionStart'>Сохраняется</p> }
					{ this.props.cartDispatchingSuccess && <p className='cart__conditionSuccess'>Сохранено</p> }
					{ this.props.cartDispatchingError && <p className='cart__conditionError'>Ошибка</p> }
				</div>
				<div className='cart_buttons'>
					<button className='cart_buttonDispatch' onClick={this.handleDispatchCartButton} disabled={this.props.cartDispatchingStart}>Сохранить</button>
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
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
