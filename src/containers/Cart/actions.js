import {
	DISPATCH_CART_SUCCESS,
	DISPATCH_CART_FAILURE,
	DISPATCH_CART_STARTED,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	CHANGE_COUNT_PRODUCT,
	CLEAR_CART,
} from './types';

export const dispatchCart = (url, cartData) => {
	return dispatch => {
		dispatch(dispatchCartStarted());

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(cartData),
			mode: 'cors',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})
			.then(res => {
				if (res.ok) {
					dispatch(dispatchCartSuccess());
				} else {
					throw new Error('Корзина не была сохранена. Проблемы с сетью.');
				}
			})
			.catch(err => {
				dispatch(dispatchCartFailure(err.message));
			});
	};
};

const dispatchCartSuccess = () => ({
	type: DISPATCH_CART_SUCCESS,
});

const dispatchCartStarted = () => ({
	type: DISPATCH_CART_STARTED,
});

const dispatchCartFailure = error => ({
	type: DISPATCH_CART_FAILURE,
	payload: { error },
});

export const actionWithProduct = (actionAdd, id) => {
	if (actionAdd) return addProduct(id);
	else return deleteProduct(id);
};

const addProduct = id => ({
	type: ADD_PRODUCT,
	payload: { id },
});

const deleteProduct = id => ({
	type: DELETE_PRODUCT,
	payload: { id },
});

export const changeProductsCount = (id, count) => ({
	type: CHANGE_COUNT_PRODUCT,
	payload: { id, count },
});

export const clearCart = id => ({
	type: CLEAR_CART,
});
