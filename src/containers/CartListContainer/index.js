import React from 'react';
import { connect } from 'react-redux';

import CartList from '../../components/CartList';

import {
	changeProductsCount,
	actionWithProduct,
} from '../../store/Cart/actions';

import {
	selectDataProductsInCart,
	selectCartDispatchingStart,
} from '../../store/Cart/selectors';

class CartListContaiter extends React.Component {
	render() {
		return (
			<CartList
				products={this.props.dataProductsInCart}
				disabledButtons={this.props.cartDispatchingStart}
				handleActionCart={this.props.handleActionCart}
				handleChangeProductsCount={this.props.handleChangeProductsCount}
			/>
		);
	}
}

const mapStateToProps = store => {
	return {
		dataProductsInCart: selectDataProductsInCart(store),
		cartDispatchingStart: selectCartDispatchingStart(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleChangeProductsCount: (productID, count) => {
			dispatch(changeProductsCount(productID, count));
		},
		handleActionCart: (actionAdd, productID) => {
			dispatch(actionWithProduct(actionAdd, productID));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListContaiter);
