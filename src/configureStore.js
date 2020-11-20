import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import {composeWithDevTools as clientWithDevTools} from 'redux-devtools-extension';
import {composeWithDevTools as serverWithDevTools} from 'remote-redux-devtools';

import createRootReducer from './reducers'

const isRemote = true;
const composeEnhancers = isRemote ? serverWithDevTools({realtime: true, port: 8000}) : clientWithDevTools({});

export const appHistory = createBrowserHistory();

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(appHistory),
		preloadedState,
		composeEnhancers(
			applyMiddleware(
				routerMiddleware(appHistory)
			)
		)
	)
}
