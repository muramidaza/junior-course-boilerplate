import {createStore} from 'redux'
import {combineReducers} from 'redux'

import app from './containers/App/reducers';
import formfilter from './containers/FormFilter/reducers';
import paginator from './containers/Paginator/reducers';
import listcontainer from './containers/ListContainer/reducers';

const appReducer = combineReducers({app, formfilter, paginator, listcontainer});
export const store = createStore(appReducer);
