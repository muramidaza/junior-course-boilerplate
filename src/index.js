import React from 'react';
import ReactDOM from 'react-dom';

import {ProductsPage} from './components/ProductsPage';

import products from './products.json';

function App() {
	return (
		<ProductsPage productsData={products} />
	);
};

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
