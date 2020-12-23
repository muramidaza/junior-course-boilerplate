import React from 'react';
import { Link } from 'react-router-dom';

import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent';
import ButtonCart from '../ButtonCart';
import ButtonCartChangeCount from '../ButtonCartChangeCount';

import './index.css';
import './ratingElem.css';

import { MAX_RATING, SUB_PRICE_CONTENT, IN_STOCK_STR } from '../../config';

export default class CartList extends React.Component {
	onHandleDecreaseButton = (productID, productsCount) => {
		this.props.handleChangeProductsCount(productID, productsCount - 1);
	};

	onHandleIncreaseButton = (productID, productsCount) => {
		this.props.handleChangeProductsCount(productID, productsCount + 1);
	};

	render() {
		return (
			<ul className="cartList">
				{this.props.products.map((product, i) => (
					<div className="cartList__cardProduct" key={i}>
						<ProductItem
							isInStock={product.status == IN_STOCK_STR}
							img={product.img}
							title={product.name}
							price={product.price}
							subPriceContent={SUB_PRICE_CONTENT}
							maxRating={MAX_RATING}
							rating={product.stars}
							ratingComponent={RatingComponent}
						/>
						<div className="cartList__count">
							<ButtonCartChangeCount
								handleClickButton={this.onHandleDecreaseButton}
								productID={product.id}
								productsCount={product.count}
								innerText="-"
								disabled={product.count < 2}
							/>
							<span className="cartList__countLabel">
								{'Количество: ' + product.count}
							</span>
							<ButtonCartChangeCount
								handleClickButton={this.onHandleIncreaseButton}
								productID={product.id}
								productsCount={product.count}
								innerText="+"
							/>
						</div>
						<Link className={'cartList__linkProduct'} to={'/product/' + i}>
							Посмотреть
						</Link>
						<ButtonCart
							actionAdd={false}
							disabled={this.props.disabledButtons}
							handleActionCart={this.props.handleActionCart}
							productID={product.id}
						/>
					</div>
				))}
			</ul>
		);
	}
}
