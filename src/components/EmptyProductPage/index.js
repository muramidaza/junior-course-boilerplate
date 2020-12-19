import React from 'react';

import ElementLamp from '../SVG/lamp.svg';

import './index.css';

export default class EmptyProductPage extends React.PureComponent {
	render() {
		return (
			<div className="emptyPage">
				<p className="emptyPage__title">
					<button className="emptyPage__linkBack" onClick={this.props.onGoBack}>
						&#8592;
					</button>
					Товар не найден
				</p>
				<img src={ElementLamp} alt="Лампа" className="emptyPage__svgElement" />
			</div>
		);
	}
}
