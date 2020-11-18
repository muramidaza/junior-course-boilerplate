import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default class EmptyProductPage extends React.PureComponent {
	
	render() {
		return (
            <div className="productPage">
                <h3>Товар не найден</h3>
            </div>
		);
	};
};


