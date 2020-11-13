import React from 'react';
import ProductItem from 'school-product-card';

import './index.css';
import './rateComp.css';

const ratingComponent = ({ isFilled }) => {
	if(isFilled) 
		return <span className={'starElem starFill'}>&#9733;</span>;
	else 
		return <span className={'starElem starEmpty'}>&#9734;</span>;
};

class ProductsList extends React.Component {
	render() {
		const productsChunk = this.props.productsChunk;
		const MAX_RATING = this.props.maxRating;
		
		return (
			<ul className="productsList">
				{productsChunk.map(product => (<ProductItem 
					key = {product.id}
					isInStock = {product.isInStock}
					img = {product.img}
					title = {product.title}
					price = {product.price}
					subPriceContent = {product.subPriceContent}
					maxRating = {MAX_RATING}
					rating = {product.rating}
					ratingComponent = {ratingComponent}					
				/>))}
			</ul>
		);
	};
};

export {ProductsList};