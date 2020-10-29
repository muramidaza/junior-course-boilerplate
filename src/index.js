import React from 'react';
import ReactDOM from 'react-dom';
import {ShopProvider} from './ShopContext.js'
import {maxBy, minBy} from 'csssr-school-utils/lib/';

import ProductsPage from './components/ProductsPage';

import products from './products.json';

const categoriesNames = {
	0: 'Smartphones',
	1: 'Accessories'
}


const DEFAULT_DISCOUNT = 0;

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			minPrice: minBy(x => x.price, products).price,
			maxPrice: maxBy(x => x.price, products).price,
			minDiscount: DEFAULT_DISCOUNT
		};
		
		this.products = products;
		this.categoriesNames = categoriesNames;
	};

	handleChangeMinPrice = (number) => {
		this.setState({minPrice: number});
	};

	handleChangeMaxPrice = (number) => {
		this.setState({maxPrice: number});
	};

	handleChangeDiscount = (number) => {
		this.setState({minDiscount: number});
	};
	
	render() {
		return (
			<ShopProvider value={
				{
					minPrice: this.state.minPrice,
					maxPrice: this.state.maxPrice,
					minDiscount: this.state.minDiscount,
					
					handleChangeMinPrice: this.handleChangeMinPrice,
					handleChangeMaxPrice: this.handleChangeMaxPrice,
					handleChangeDiscount: this.handleChangeDiscount
				}
			}>
				<ProductsPage productsData={this.products} categoriesNames={this.categoriesNames} />
			</ShopProvider>	
		);
	};
};

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
