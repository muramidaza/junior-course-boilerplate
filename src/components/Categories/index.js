import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.css';

export default class Categories extends React.PureComponent {
	
	render() {
		const {categoriesList, selectedCategory, onChangeSelectedCategory} = this.props;
		
		return (
			<div className='categories'>
				{categoriesList.map(category => (
					<NavLink activeClassName='selectedButton' to={'/' + category.name} key={category.id}> {category.label} </NavLink>
				))}
			</div>
		);
	};
};
