import React from 'react';
import RatingComponent from '../RatingComponent';

import s from './index.css';
import './ratingElem.css';

const range = to => [...Array(to).keys()].map(i => i + 1);

export default class ProductPage extends React.PureComponent {

	render() {
		const nonStock = this.props.product.status == 'NON_STOCK';
		
		return (
			<div className={`goods ${nonStock ? 'goods-none' : ''}`}>
				<div className='goods__name'>
					<button className='goods__linkBack' onClick={this.props.onGoBack}>&#8592;</button> {this.props.product.name}
				</div>
				<div className='goods__card'>
					<div className='goods__imgCard'>
						<div className={`goods__type ${nonStock ? 'goods__type-none' : ''}`}>
							{nonStock ? 'Недоступен' : 'В наличии'}
						</div>
						<img
							className={`goods__img ${nonStock ? 'goods__img-none' : ''}`}
							alt={this.props.product.name}
							src={this.props.product.img}
						/>
					</div>
					<div className='goods__data'>
						<div>
							{
								range(this.props.maxRating).map(i => React.createElement(RatingComponent, {key: i, isFilled: i <= this.props.product.stars}))
							}
						</div>
						<div className='goods__prise'>
							{this.props.product.price}{this.props.subPriceContent}
						</div>
					</div>
				</div>
			</div>
		);
	};
};


