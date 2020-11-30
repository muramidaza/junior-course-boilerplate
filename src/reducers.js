import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import formfilter from './containers/FormFilter/reducers';
import listcontainer from './containers/ListContainer/reducers';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	formfilter,
	listcontainer
});

export default createRootReducer