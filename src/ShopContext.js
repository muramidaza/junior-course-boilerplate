import {createContext} from 'react'
 
const ShopContext = createContext({
	minPrice: 0,
	maxPrice: Infinity,
	minDiscount: 0,
	selectedCategiry: null
})

export const ShopProvider = ShopContext.Provider
export const ShopConsumer = ShopContext.Consumer