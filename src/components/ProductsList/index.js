import React from 'react';
import ProductItem from 'school-product-card';

import './index.css';
import './ratingPiece.css';

const MAX_RATING = 5;

const ratingPiece = ({ isFilled }) => {
	return isFilled? <span className={'starElem starFill'}>&#9733;</span> : <span className={'starElem starEmpty'}>&#9734;</span>;
};

class ProductsList extends React.Component {
	render() {
		const productsChunk = this.props.productsChunk;
		
		return (
			<ul className="productsList">
				{productsChunk.map(product => (
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

export {ProductsList};