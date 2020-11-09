import React from 'react';

import './index.css';

export default class Categories extends React.PureComponent {
	
	render() {
		const {categoriesList, selectedCategory, handleCategoryChange} = this.props;
		
		return (
			<div className='categories'>
				{categoriesList.map(category => (
					<button className={selectedCategory == category.id ? 'selectedButton' : 'unselectedBotton'} value={category.id} onClick={handleCategoryChange} key={category.id}>{category.name}</button>
				))}
			</div>
		);
	};
};
