import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HeaderCart from '../../components/HeaderCart';
import CartListContainer from '../CartListContainer';
import Cart from '../Cart';

import './index.css';

class CartPage extends React.Component {
	handleGoBack = event => {
		event.preventDefault();
		this.props.history.goBack();
	};

	render() {
		return (
			<div className="cartPage">
				<div className="cartPage__headerCartSection">
					<HeaderCart onGoBack={this.handleGoBack} />
				</div>
				<div className="cartPage__mainSection">
					<div className="cartPage__productsSection">
						<CartListContainer />
					</div>
					<div className="cartPage__cartSection">
						<Cart />
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CartPage);
