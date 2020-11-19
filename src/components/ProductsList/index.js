import React from 'react';
import {Link} from 'react-router-dom';

import ProductItem from 'school-product-card';

import './index.css';
import './ratingPiece.css';

const ratingPiece = ({ isFilled }) => {
	const icon = isFilled ? '★' : '☆';
	const className = `starElem ${isFilled ? 'starFill' : 'starEmpty'}`;
	return <span className={className}>{icon}</span>
};

export default class ProductsList extends React.Component {
	
	render() {
		return (
			<ul className='productsList'>
				{this.props.products.map((product, i)=> (
					<div className='cardProduct' key={i}>
						<ProductItem 
							isInStock={product.isInStock}
							img={product.img}
							title={product.title}
							price={product.price}
							subPriceContent={product.subPriceContent}
							maxRating={this.props.maxRating}
							rating={product.rating}
							ratingComponent={ratingPiece}					
						/>
						<Link to={'/product/' + product.id}>Посмотреть</Link>
					</div>
				))}
			</ul>
		);
	};
};
