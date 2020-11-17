import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import createRootReducer from './reducers'

export const appHistory = createBrowserHistory();

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(appHistory),
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(appHistory)
			),
		),
	)
}
