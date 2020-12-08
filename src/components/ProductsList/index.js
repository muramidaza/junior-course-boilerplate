import React from 'react';
import { Link } from 'react-router-dom';

import ProductItem from 'school-product-card';
import RatingComponent from '../RatingComponent';
import ButtonCart from '../ButtonCart';

import './index.css';
import './ratingElem.css';
import { selectTotalGoodsInCart } from '../../selectors';

export default class ProductsList extends React.Component {
	goodInCart(id, data) {
		return !(data[id] && data[id] > 0);
	}
	
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
							subPriceContent={this.props.subPriceContent}
							maxRating={this.props.maxRating}
							rating={product.stars}
							ratingComponent={RatingComponent}
						/>
						<Link className={'productList__linkProduct'} to={'/product/' + i}>Посмотреть</Link>
						<ButtonCart 
							actionAdd={this.goodInCart(product.id, this.props.cartData)} 
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
