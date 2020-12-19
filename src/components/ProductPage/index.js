import React from 'react';
import RatingComponent from '../RatingComponent';
import ButtonCart from '../ButtonCart';

import './ratingElem.css';
import './index.css';

import { range, productInCart } from '../../utils';

import { MAX_RATING, SUB_PRICE_CONTENT } from '../../config';

export default class ProductPage extends React.PureComponent {
	render() {
		const nonStock = this.props.product.status == 'NON_STOCK';

		return (
			<div className={`products ${nonStock ? 'products-none' : ''}`}>
				<div className="products__name">
					<button className="products__linkBack" onClick={this.props.onGoBack}>
						&#8592;
					</button>
					{this.props.product.name}
				</div>
				<div className="products__card">
					<div className="products__imgCard">
						<div
							className={`products__type ${
								nonStock ? 'products__type-none' : ''
							}`}
						>
							{nonStock ? 'Недоступен' : 'В наличии'}
						</div>
						<img
							className={`products__img ${
								nonStock ? 'products__img-none' : ''
							}`}
							alt={this.props.product.name}
							src={this.props.product.img}
						/>
					</div>
					<div className="products__data">
						<div>
							{range(MAX_RATING).map(i =>
								React.createElement(RatingComponent, {
									key: i,
									isFilled: i <= this.props.product.stars,
								})
							)}
						</div>
						<div className="products__prise">
							{this.props.product.price}
							{SUB_PRICE_CONTENT}
						</div>
						<div className="products__button">
							<ButtonCart
								actionAdd={productInCart(
									this.props.product.id,
									this.props.cartData
								)}
								disabled={this.props.disabledButton}
								handleActionCart={this.props.handleActionCart}
								productID={this.props.product.id}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
