import React from 'react';
import { Link } from 'react-router-dom';

import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent';
import ButtonCart from '../ButtonCart';

import './index.css';
import './ratingElem.css';

import { MAX_RATING, SUB_PRICE_CONTENT } from '../../config';

export default class CartList extends React.Component {
	render() {
		return (
			<ul className="productsList">
				{this.props.products.map((product, i) => (
					<div className="productsList__cardProduct" key={i}>
						<ProductItem
							isInStock={product.status == 'IN_STOCK'}
							img={product.img}
							title={product.name}
							price={product.price}
							subPriceContent={SUB_PRICE_CONTENT}
							maxRating={MAX_RATING}
							rating={product.stars}
							ratingComponent={RatingComponent}
						/>
						<Link className={'productList__linkProduct'} to={'/product/' + i}>
							Посмотреть
						</Link>
						<ButtonCart
							actionAdd={false}
							disabled={this.props.disabledButtons}
							handleActionCart={this.props.handleActionCart}
							goodID={product.id}
						/>
					</div>
				))}
			</ul>
		);
	}
}
