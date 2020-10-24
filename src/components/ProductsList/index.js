import React from 'react';

import logComponent from '../../logComponent.js';
import ProductItem from 'school-product-card';

import './index.css';
import './ratingPiece.css';

const MAX_RATING = 5;

const ratingPiece = ({ isFilled }) => {
	const icon = isFilled ? '★' : '☆';
	const className = `starElem ${isFilled ? 'starFill' : 'starEmpty'}`;
	return <span className={className}>{icon}</span>
};

export default class ProductsList extends logComponent {
	
	render() {
		const {productsToShow} = this.props;
		
		return (
			<ul className="productsList">
				{productsToShow.map(product => (
					<ProductItem 
						key={product.id}
						isInStock={product.isInStock}
						img={product.img}
						title={product.title}
						price={product.price}
						subPriceContent={product.subPriceContent}
						maxRating={MAX_RATING}
						rating={product.rating}
						ratingComponent={ratingPiece}					
					/>
				))}
			</ul>
			
		);
	};
};
