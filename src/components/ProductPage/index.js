import React from 'react';
import cx from 'classnames';
import RatingComponent from '../RatingComponent';

import s from './index.module.css';
import './ratingElem.css';

const range = to => [...Array(to).keys()].map(i => i + 1);

export default class ProductPage extends React.PureComponent {

	render() {
		return (
			<div className={cx(s.goods, { [s.goodsNone]: (this.props.product.status != 'IN_STOCK') })}>
				<div className={s.goodsName}>
					<a className={s.linkBack} href='/' onClick={this.props.onGoBack}>&#8592;</a> {this.props.product.name}
				</div>
				<div className={s.goodCard}>
					<div className={s.goodImgCard}>
						<div className={cx(s.goodsType, { [s.goodsTypeNone]: (this.props.product.status != 'IN_STOCK') })}>
							{this.props.product.status == 'IN_STOCK' ? 'В наличии' : 'Недоступен'}
						</div>
						<img
							className={cx(s.goodsImg, { [s.goodsImgNone]: (this.props.product.status != 'IN_STOCK') })}
							alt={this.props.product.name}
							src={this.props.product.img}
						/>
					</div>
					<div className={s.goodData}>
						<div>
							{
								range(this.props.maxRating).map(i => React.createElement(RatingComponent, {key: i, isFilled: i <= this.props.product.stars}))
							}
						</div>
						<div className={s.goodsPrise}>
							{this.props.product.price}{this.props.subPriceContent}
						</div>
					</div>
				</div>
			</div>
		);
	};
};


