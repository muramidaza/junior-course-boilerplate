import React from 'react';

import './index.css';

export default class Categories extends React.PureComponent {
	
	render() {
		const {categoriesList, selectedCategory, onChangeSelectedCategory} = this.props;
		
		return (
			<div className='categories'>
				{categoriesList.map(category => (
					<button className={selectedCategory == category.id ? 'selectedButton' : 'unselectedBotton'} value={category.id} onClick={onChangeSelectedCategory} key={category.id}>{category.name}</button>
				))}
			</div>
		);
	};
};
