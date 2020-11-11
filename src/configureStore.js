import {createStore} from 'redux'
import {combineReducers} from 'redux'

import app from "./containers/App/reducers.js";
import formfilter from "./containers/FormFilter/reducers.js";
import paginator from "./containers/Paginator/reducers.js";

const appReducer = combineReducers({app, formfilter, paginator});
export const store = createStore(appReducer);
