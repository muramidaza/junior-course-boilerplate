import React from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';

import s from './index.module.css';
import './ratingPiece.css';

const range = to => [...Array(to).keys()].map(i => i + 1);

const ratingComponent = ({ isFilled }) => {
	const icon = isFilled ? '★' : '☆';
	const className = `starElem ${isFilled ? 'starFill' : 'starEmpty'}`;
	return <span className={className}>{icon}</span>
};

export default class ProductPage extends React.PureComponent {

	render() {
		console.log(this.props);
		return (
			<div className={cx(s.goods, { [s.goodsNone]: !this.props.product.isInStock })}>
				<div className={s.goodsName}>{this.props.product.title}</div>
				<div className={s.goodCard}>
					<div className={s.goodImgCard}>
						<div className={cx(s.goodsType, { [s.goodsTypeNone]: !this.props.product.isInStock })}>
							{this.props.product.isInStock ? "В наличии" : "Недоступен"}
						</div>
						<img
							className={cx(s.goodsImg, { [s.goodsImgNone]: !this.props.product.isInStock })}
							alt={'GoodImage'}
							src={this.props.product.img}
						/>
					</div>
					<div className={s.goodData}>
						<div>
							{
								range(this.props.maxRating).map(i => React.createElement(ratingComponent, {key: i, isFilled: i <= this.props.product.rating}))
							}
						</div>
						<div className={s.goodsPrise}>
							{this.props.product.price}{this.props.product.subPriceContent}
						</div>
					</div>
				</div>
				<button onClick={this.props.onGoBack}>Back</button>
			</div>
		);
	};
};


