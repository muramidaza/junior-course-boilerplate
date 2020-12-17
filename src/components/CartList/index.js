import React from 'react';
import { Link } from 'react-router-dom';

import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent';
import ButtonCart from '../ButtonCart';

import './index.css';
import './ratingElem.css';

import { MAX_RATING, SUB_PRICE_CONTENT } from '../../config';

export default class CartList extends React.Component {
	onClickMinus = (event) => {
		this.props.handleChangeGoodsCount(event.target.dataset.id, --event.target.dataset.count)
	}

	onClickPlus = (event) => {
		this.props.handleChangeGoodsCount(event.target.dataset.id, ++event.target.dataset.count)
	}	
	
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
							<button className="cartList__buttonCount" onClick={this.onClickMinus} data-id={product.id} data-count={product.count} disabled={product.count < 2}>
							-
							</button>						
							<span className="cartList__countLabel">
								{'Количество: ' + product.count}
							</span>
							<button className="cartList__buttonCount" onClick={this.onClickPlus} data-id={product.id} data-count={product.count}>
								+
							</button>							
						</div>
						<Link className={"cartList__linkProduct"} to={"/product/" + i}>
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
