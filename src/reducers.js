import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import formfilter from './containers/FormFilter/reducers';
import listcontainer from './containers/ListContainer/reducers';
import app from './containers/App/reducers';
import cart from './containers/Cart/reducers';

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		formfilter,
		listcontainer,
		app,
		cart,
	});

export default createRootReducer;
