import {
	DISPATCH_CART_SUCCESS,
	DISPATCH_CART_FAILURE,
	DISPATCH_CART_STARTED,
	ADD_GOOD,
	DELETE_GOOD,
	CHANGE_COUNT_GOOD,
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

export const actionWithGood = (actionAdd, id) => {
	if (actionAdd) return addGood(id);
	else return deleteGood(id);
};

const addGood = id => ({
	type: ADD_GOOD,
	payload: { id },
});

const deleteGood = id => ({
	type: DELETE_GOOD,
	payload: { id },
});

export const changeGoodCount = (id, count) => ({
	type: CHANGE_COUNT_GOOD,
	payload: { id, count },
});

export const clearCart = id => ({
	type: CLEAR_CART,
});
