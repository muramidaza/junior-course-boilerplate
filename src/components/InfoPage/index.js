import React from 'react';

import ElementLamp from '../SVG/lamp.svg';

import './index.css';

export default class InfoPage extends React.PureComponent {
	render() {
		return (
			<div className="infoPage">
				<p className="infoPage__title">{this.props.title}</p>
				<p className="infoPage__message">{this.props.message}</p>
				<img src={ElementLamp} alt="Lamp" className="infoPage__svgElement" />
			</div>
		);
	}
}
