import React from 'react';

import ProductItem from 'school-product-card';

import './index.css';

const ratingComponent = ({ isFilled }) => {
	let filled = '';
	if(isFilled) filled = "starFill";
	return <div className={filled} />;
};

class ProductsList extends React.Component {
	render() {
		const productsChunk = this.props.productsChunk;
		const MAX_RATING = this.props.maxRating;
		
		return (
			<ul className="goodsList">
				{productsChunk.map(product => (
					
					<ProductItem 
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