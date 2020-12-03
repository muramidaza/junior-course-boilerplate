import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import configureStore, {appHistory} from './configureStore';

const URL='https://course-api.school.csssr.com/products';

const DEFAULT_DISCOUNT = 0;
const GOODS_IN_PAGE = 3;
const MAX_RATING = 5;
const SUB_PRICE_CONTENT = 'руб.'

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<App url={URL} appHistory={appHistory} defaultDiscount={DEFAULT_DISCOUNT} goodsInPage={GOODS_IN_PAGE} maxRating={MAX_RATING} subPriceContent={SUB_PRICE_CONTENT}/>
	</Provider>,
	document.getElementById('root')
);
