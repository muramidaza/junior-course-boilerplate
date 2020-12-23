import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import formfilter from './FormFilter/reducers';
import listcontainer from './ListContainer/reducers';
import app from './App/reducers';
import cart from './Cart/reducers';

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		formfilter,
		listcontainer,
		app,
		cart,
	});

export default createRootReducer;
