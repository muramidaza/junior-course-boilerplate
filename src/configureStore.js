import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import createRootReducer from './reducers'

const devtoolMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const appHistory = createBrowserHistory();

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(appHistory),
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(appHistory),
				devtoolMiddleware
			),
		),
	)
}
