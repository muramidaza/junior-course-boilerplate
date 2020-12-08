import React from 'react';
import { connect } from 'react-redux';

import { clearCart, dispatchCart } from './actions';
import { selectTotalGoodsInCart, selectCartData, selectCartDispatchingStart, selectCartDispatchingError, selectCartDispatchingSuccess } from '../../selectors';

const urlSave = 'https://course-api.csssr.school/save';

class Cart extends React.Component {
	
	handleDispatchCartButton = () => {
		this.props.handleDispatchCart(urlSave, this.props.cartData);
	}
	
	render() {
		return (
			<div className='cart'>
				<div className='cart_label'>
					Корзина
				</div>
				<div className='cart_counter'>
					<p className='cart_counterLabel'>Количество товаров в корзине</p>
					<p className='cart_counterValue'>{this.props.totalGoodsInCart}</p>
				</div>
				<div className='cart_condition'>
					{ this.props.cartDispatchingStart && <p className='cart_conditionStart'>Сохраняется</p> }
					{ this.props.cartDispatchingSuccess && <p className='cart_conditionSuccess'>Сохранено</p> }
					{ this.props.cartDispatchingSuccess && <p className='cart_conditionError'>Ошибка</p> }
				</div>
				<div className='cart_button'>
					<button className='cart_buttonDispatch' onClick={this.handleDispatchCartButton}></button>
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
