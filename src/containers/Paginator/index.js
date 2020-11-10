import React from 'react';

import logComponent from '../../logComponent.js';
import Link from './Link.js';

import './index.css';

export default class Paginator extends logComponent {
	render() {
		const Arr = Array(this.props.amountPages).fill().map((e, i) => i + 1);
		return (
			<div className="paginator">
				{Arr.map((item, i) => {
					return (
						<Link numPage={i} key={i} />
					)
				})}
			</div>
		)
	}
}