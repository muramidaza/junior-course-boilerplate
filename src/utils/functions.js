export function productInCart(id, data) {
	return !(data[id] && data[id] > 0);
}

export function range(to) {
	return [...Array(to).keys()].map(i => i + 1);
}
