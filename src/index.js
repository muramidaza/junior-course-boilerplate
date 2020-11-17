import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {appHistory} from './configureStore';

import CatalogPage from './containers/CatalogPage';

const store = configureStore({})

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={appHistory}>
			<>
				<Route exact path="/" render={() => (<CatalogPage />)} />
				
				<Route exact path="/:category" render={() => (<CatalogPage />)} />
				<Route exact path="/:category/:id" render={() => (<CatalogPage />)} />

				<Route exact path="/gooditem/:id" render={() => (<div>Miss</div>)} />
			</>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
