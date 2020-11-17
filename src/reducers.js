import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import catalogpage from './containers/CatalogPage/reducers';
import formfilter from './containers/FormFilter/reducers';
import paginator from './containers/Paginator/reducers';
import listcontainer from './containers/ListContainer/reducers';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	catalogpage,
	formfilter,
	paginator,
	listcontainer
});

export default createRootReducer