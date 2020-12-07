import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

export default class Categories extends React.PureComponent {
	render() {
		const { categoriesList } = this.props;

		return (
			<div className="categories">
				<p className="categories__label">Категории товаров</p>
				{categoriesList.map((category, i) => (
					<NavLink
						className="categories__link"
						activeClassName="activ"
						isActive={(match, location) => {
							if (
								location.pathname.split('/')[1] == category.name.split('/')[0]
							)
								return true;
						}}
						to={'/' + category.name}
						key={i}
					>
						{category.label}
					</NavLink>
				))}
			</div>
		);
	}
}
