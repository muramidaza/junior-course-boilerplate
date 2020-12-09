import {
	DISPATCH_CART_SUCCESS,
	DISPATCH_CART_FAILURE,
	DISPATCH_CART_STARTED,
	ADD_GOOD,
	DELETE_GOOD,
	INCREASE_COUNT_GOOD,
	DECREASE_COUNT_GOOD,
	CLEAR_CART
} from './types';

export const dispatchCart = (url, cartData) => {
	return dispatch => {
		dispatch(dispatchCartStarted());
		
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(cartData),
			mode: 'cors', 
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}		
		})
		.then((res) => {
			console.log(res);
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
	type: DISPATCH_CART_SUCCESS
});

const dispatchCartStarted = () => ({
	type: DISPATCH_CART_STARTED
});

const dispatchCartFailure = error => ({
	type: DISPATCH_CART_FAILURE,
	payload: { error }
});

export const actionWithGood = (actionAdd, id) => {
	if(actionAdd) return addGood(id); else return deleteGood(id);
}

const addGood = id => ({
	type: ADD_GOOD,
	payload: { id }
});

const deleteGood = id => ({
	type: DELETE_GOOD,
	payload: { id }
});

export const increaseGoodCount = id => ({
	type: INCREASE_COUNT_GOOD,
	payload: { id }
});

export const decreaseGoodCount = id => ({
	type: DECREASE_COUNT_GOOD,
	payload: { id }
});

export const clearCart = id => ({
	type: CLEAR_CART,
});
