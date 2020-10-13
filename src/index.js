import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './components/Header/index.js';
import {ProductsList} from './components/ProductsList/index.js';

import './index.css';

import products from './products.json';

const GOOD_IN_PAGE = 3;
const MAX_RATING = 10;

const productsChunk = products.slice(0, GOOD_IN_PAGE);

class ProductsPage extends React.Component {
	render() {
		return (
			<div className="productsPage">
				<Header />
				<ProductsList productsChunk = {productsChunk} maxRating = {MAX_RATING}/>
			</div>
		);
	};
};

function App() {
	return (
		<ProductsPage />
	);
};

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);