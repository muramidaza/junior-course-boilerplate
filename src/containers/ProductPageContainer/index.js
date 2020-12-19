import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
	selectSelectedProduct,
	selectCartData,
	selectCartDispatchingStart,
} from '../../selectors';

import { actionWithProduct } from '../Cart/actions';

import ProductPage from '../../components/ProductPage';
import EmptyProductPage from '../../components/EmptyProductPage';

class ProductPageContainer extends React.Component {
	handleGoBack = event => {
		event.preventDefault();
		this.props.history.goBack();
	};

	render() {
		if (this.props.selectedProduct) {
			return (
				<ProductPage
					product={this.props.selectedProduct}
					onGoBack={this.handleGoBack}
					cartData={this.props.cartData}
					disabledButton={this.props.cartDispatchingStart}
					handleActionCart={this.props.handleActionCart}
				/>
			);
		} else {
			return <EmptyProductPage onGoBack={this.handleGoBack} />;
		}
	}
}

const mapStateToProps = store => {
	return {
		selectedProduct: selectSelectedProduct(store),
		cartData: selectCartData(store),
		cartDispatchingStart: selectCartDispatchingStart(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleActionCart: (actionAdd, productID) => {
			dispatch(actionWithProduct(actionAdd, productID));
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer)
);
