import React from 'react';
import { Link } from 'react-router-dom';

import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent';
import ButtonCart from '../ButtonCart';
import ButtonCartIncrease from '../ButtonCartIncrease';
import ButtonCartDecrease from '../ButtonCartDecrease';

import './index.css';
import './ratingElem.css';

import { MAX_RATING, SUB_PRICE_CONTENT } from '../../config';

export default class CartList extends React.Component {
	
	render() {
		return (
			<ul className="cartList">
				{this.props.products.map((product, i) => (
					<div className="cartList__cardProduct" key={i}>
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
						<div className="cartList__count">
							<ButtonCartDecrease onChangeGoodsCount={this.props.handleChangeGoodsCount} goodID={product.id} goodsCount={product.count} disabled={product.count < 2} />
							<span className="cartList__countLabel">
								{'Количество: ' + product.count}
							</span>
							<ButtonCartIncrease onChangeGoodsCount={this.props.handleChangeGoodsCount} goodID={product.id} goodsCount={product.count} />
						</div>
						<Link className={'cartList__linkProduct'} to={'/product/' + i}>
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
