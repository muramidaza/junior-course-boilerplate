import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default class ProductPage extends React.PureComponent {
	
	render() {
		return (
            <div className="productPage">
                <h3>{this.props.product.title}</h3>
                <img src={this.props.product.img} />
                <p>Цена {this.props.product.price + ' ' + this.props.product.subPriceContent}</p>
                <p>Скидка {this.props.product.discount}</p>
            </div>
		);
	};
};


