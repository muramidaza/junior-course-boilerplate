import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk';

import { composeWithDevTools as clientWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './reducers';

const composeEnhancers = clientWithDevTools({});

export const appHistory = createBrowserHistory();

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(appHistory),
		preloadedState,
		composeEnhancers(applyMiddleware(routerMiddleware(appHistory), thunk))
	);
}
