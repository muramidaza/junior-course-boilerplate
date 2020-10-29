import React from 'react';

import logComponent from '../../logComponent.js';

import './index.css';

export default class Categories extends logComponent {
	
	handleCategoryChange(event) {
		window.location.search = 'category=' + event.target.value;
	}
	
	render() {
		
		const categoriesList = this.props.categoriesList;
		
		return (
			<div className='categories'>
				{categoriesList.map(category => (
						<button value={category.id} onClick={this.handleCategoryChange} key={category.id}>{category.name}</button>
				))}
			</div>
		);
	};
};
