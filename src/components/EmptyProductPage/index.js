import React from 'react';

import './index.css';

export default class EmptyProductPage extends React.PureComponent {
	
	render() {
		return (
            <div className="productEmptyPage">
                <h3>Товар не найден</h3>
				<a href="#" onClick={this.props.onGoBack}>Назад</a>
            </div>
		);
	};
};


