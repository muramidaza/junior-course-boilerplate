import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
	selectSelectedProduct,
	selectMaxRating,
	selectSubPriceContent,
	selectCartData,
	selectCartDispatchingStart
} from '../../selectors';

import { actionWithGood } from '../Cart/actions';

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
					maxRating={this.props.maxRating}
					subPriceContent={this.props.subPriceContent}
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
		maxRating: selectMaxRating(store),
		subPriceContent: selectSubPriceContent(store),
		
		cartData: selectCartData(store),
		cartDispatchingStart: selectCartDispatchingStart(store)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleActionCart: (actionAdd, goodID) => {
			dispatch(actionWithGood(actionAdd, goodID));
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer));
