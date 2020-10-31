import React from 'react';
import {ShopProvider} from '../../ShopContext.js'
import {maxBy, minBy} from 'csssr-school-utils/lib/';
import ProductsPage from '../ProductsPage';

const DEFAULT_DISCOUNT = 0;

function getCategory() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('category');
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			products: this.props.products,
			categoriesList: this.props.categoriesList,
			minPrice: minBy(x => x.price, this.props.products).price,
			maxPrice: maxBy(x => x.price, this.props.products).price,
			minDiscount: DEFAULT_DISCOUNT,
			selectedCategory: getCategory()
		};
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
					selectedCategory: this.state.selectedCategory,
					
					categoriesList: this.state.categoriesList,
					productsData: this.props.products,
					
					handleChangeMinPrice: this.handleChangeMinPrice,
					handleChangeMaxPrice: this.handleChangeMaxPrice,
					handleChangeDiscount: this.handleChangeDiscount,
					handleResetFilters: this.handleResetFilters,
				}
			}>
				<ProductsPage />
			</ShopProvider>	
		);
	};
};