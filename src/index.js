import React from 'react';
import ReactDOM from 'react-dom';
import {ShopProvider} from './ShopContext.js'
import {maxBy, minBy} from 'csssr-school-utils/lib/';

import ProductsPage from './components/ProductsPage';

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


const DEFAULT_DISCOUNT = 0;

function getUrlVars() {
	var vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			minPrice: minBy(x => x.price, products).price,
			maxPrice: maxBy(x => x.price, products).price,
			minDiscount: DEFAULT_DISCOUNT
		};
		
		this.products = products;
		this.categoriesList = categoriesList;
		
		const getCategory = getUrlVars()['category'];
		this.selectedCategory = typeof getCategory != 'undefined'? getCategory : -1;
		//console.log(this.selectedCategory);
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
	
	handleResetFilters = (number) => {
		this.setState({
			minPrice: minBy(x => x.price, products).price,
			maxPrice: maxBy(x => x.price, products).price,
			minDiscount: DEFAULT_DISCOUNT
		});
		window.location.search = '';
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
					handleChangeDiscount: this.handleChangeDiscount,
					handleResetFilters: this.handleResetFilters,
					
					categoriesList: this.categoriesList,
					selectedCategory: this.selectedCategory
					
				}
			}>
				<ProductsPage productsData={this.products} />
			</ShopProvider>	
		);
	};
};

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
