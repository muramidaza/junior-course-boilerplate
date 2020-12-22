import { maxBy, minBy } from 'csssr-school-utils/lib/';

function getMinPrice() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('minprice');
}

function getMaxPrice() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('maxprice');
}

function getMinDiscount() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('mindiscount');
}

export default function initialState(productsData, defaultDiscount) {
	const defaultParams = {
		minPrice:
			getMinPrice() !== null
				? +getMinPrice()
				: minBy(x => x.price, productsData).price,
		maxPrice:
			getMaxPrice() !== null
				? +getMaxPrice()
				: maxBy(x => x.price, productsData).price,
		minDiscount:
			getMinDiscount() !== null ? +getMinDiscount() : defaultDiscount,
	};

	return {
		minPrice: defaultParams.minPrice,
		maxPrice: defaultParams.maxPrice,
		minDiscount: defaultParams.minDiscount,
		defaultParams: defaultParams, //for resetFilters
	};
}
