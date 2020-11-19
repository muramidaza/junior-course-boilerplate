import React from 'react';
import {connect} from 'react-redux';
import {selectSelectedProduct, selectMaxRating} from '../../selectors';
import ProductPage from '../../components/ProductPage';
import EmptyProductPage from '../../components/EmptyProductPage';

class ProductPageContainer extends React.Component {
	
	render() {
        if(this.props.selectedProduct) 
            {return (<ProductPage product={this.props.selectedProduct} maxRating={this.props.maxRating} />)} 
        else 
            {return (<EmptyProductPage />)}
	};
};

const mapStateToProps = (store) => {
	return {
        selectedProduct: selectSelectedProduct(store),
		maxRating: selectMaxRating(store)
	}
}

export default connect(mapStateToProps)(ProductPageContainer)