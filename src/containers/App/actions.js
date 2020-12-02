import {LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, LOAD_DATA_STARTED} from './types';

export const loadData = () => {
	return dispatch => {
		dispatch(loadDataStarted());
		
		fetch('https://course-api.school.csssr.com/products')
			.then(
				res => res.json()
			).then(
				data => dispatch(loadDataSuccess(data.products))
			)
			.catch(
				err => dispatch(loadDataFailure(err))
			);

	};
};
  
const loadDataSuccess = data => ({
	type: LOAD_DATA_SUCCESS,
	payload: {data}
});
  
const loadDataStarted = () => ({
	type: LOAD_DATA_STARTED
});

const loadDataFailure = error => ({
	type: LOAD_DATA_FAILURE,
	payload: {error}
});
