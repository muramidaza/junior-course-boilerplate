import React from 'react';
import {ShopProvider, getInitialState} from '../../ShopContext.js'
import ProductsPage from '../ProductsPage';



export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = getInitialState();
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
					productsData: this.state.productsData,
					
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