import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import products from './products.json';

const categoriesList = [
	{
		id: 0,
		name: 'Smartphones'
	},
	{
		id: 1,
		name: 'Accessories'
	}
];

ReactDOM.render(
	<App products={products} categoriesList={categoriesList} />, 
	document.getElementById('root')
);
