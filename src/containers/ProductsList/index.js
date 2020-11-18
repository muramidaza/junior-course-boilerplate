import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ProductItem from 'school-product-card';

import {selectProductsInCurrentPage} from '../../selectors'

import './index.css';
import './ratingPiece.css';

const MAX_RATING = 5;

const ratingPiece = ({ isFilled }) => {
	const icon = isFilled ? '★' : '☆';
	const className = `starElem ${isFilled ? 'starFill' : 'starEmpty'}`;
	return <span className={className}>{icon}</span>
};

class ProductsList extends React.Component {
	
	render() {
		return (
			<ul className='productsList'>
				{this.props.productsInCurrentPage.map((product, i)=> (
					<div className='cardProduct' key={i}>
						<ProductItem 
							isInStock={product.isInStock}
							img={product.img}
							title={product.title}
							price={product.price}
							subPriceContent={product.subPriceContent}
							maxRating={MAX_RATING}
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

const mapStateToProps = (store) => {
	return {
		productsInCurrentPage: selectProductsInCurrentPage(store)
	}
}

export default connect(mapStateToProps)(ProductsList)
