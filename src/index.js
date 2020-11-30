import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {appHistory} from './configureStore';

import CatalogPage from './containers/CatalogPage';
import ProductPageContainer from './containers/ProductPageContainer';

import {initialState} from './loadData';

const store = configureStore(initialState)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={appHistory}>
			<>
				<Switch>
					<Route path="/product" render={() => (<ProductPageContainer />)} />
					<Route path="/" render={() => (<CatalogPage />)} />
				</Switch>
			</>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
