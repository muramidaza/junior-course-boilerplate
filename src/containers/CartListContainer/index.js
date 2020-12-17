import React from 'react';
import { connect } from 'react-redux';

import goodsFilter from '../../goodsFilter';

import CartList from '../../components/CartList';

import { changeGoodsCount, actionWithGood } from '../Cart/actions';

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
				handleChangeGoodsCount={this.props.handleChangeGoodsCount}
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
		handleActionCart: (actionAdd, goodID) => {
			dispatch(actionWithGood(actionAdd, goodID));
		},		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListContaiter);
