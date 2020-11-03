import React from 'react';

import logComponent from '../../logComponent.js';

import './index.css';

export default class Categories extends logComponent {
	
	render() {
		const {categoriesList} = this.props;
		const {selectedCategory} = this.props;
		
		return (
			<div className='categories'>
				{categoriesList.map(category => (
					<button className={selectedCategory == category.id ? 'selected' : ''} value={category.id} onClick={this.props.handleCategoryChange} key={category.id}>{category.name}</button>
				))}
			</div>
		);
	};
};
