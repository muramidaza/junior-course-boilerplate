import React from 'react';

import './index.css';

export default class Categories extends React.PureComponent {
	
	render() {
		const {categoriesList} = this.props;
		const {selectedCategory} = this.props;
		
		return (
			<div className='categories'>
				{categoriesList.map(category => (
					<button className={selectedCategory == category.id ? 'selectedButton' : 'unselectedBotton'} value={category.id} onClick={this.props.handleCategoryChange} key={category.id}>{category.name}</button>
				))}
			</div>
		);
	};
};
