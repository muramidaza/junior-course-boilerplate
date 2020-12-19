import React from 'react';

import ElementIsland from '../SVG/island.svg';

import './index.css';

export default class Page404 extends React.PureComponent {
	render() {
		return (
			<div className="Page404">
				<p className="Page404__title">Страница не найдена</p>
				<img src={ElementIsland} alt="Остров" className="Page404__svgElement" />
			</div>
		);
	}
}
