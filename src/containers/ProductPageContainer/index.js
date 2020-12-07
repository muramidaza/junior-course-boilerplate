import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
	selectSelectedProduct,
	selectMaxRating,
	selectSubPriceContent,
} from '../../selectors';
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
	};
};

export default withRouter(connect(mapStateToProps)(ProductPageContainer));
