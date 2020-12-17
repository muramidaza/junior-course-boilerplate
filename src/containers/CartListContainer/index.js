import React from 'react';
import { connect } from 'react-redux';

import goodsFilter from '../../goodsFilter';

import CartList from '../../components/CartList';

import { changeGoodsCount } from '../Cart/actions';

import {
	selectDataProductsInCart,
	selectCartDispatchingStart
} from '../../selectors';

class CartListContaiter extends React.Component {

	render() {
		return (
			<CartList
				products={this.props.dataProductsInCart}
				disabledButtons={this.props.cartDispatchingStart}
				handleActionCart={this.props.handleActionCart}
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
		handleChangeGoodsCount: (goodID, count) => {
			dispatch(changeGoodsCount(goodID, count));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListContaiter);
