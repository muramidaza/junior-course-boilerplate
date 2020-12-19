import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore, { appHistory } from './configureStore';

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<App appHistory={appHistory} />
	</Provider>,
	document.getElementById('root')
);
