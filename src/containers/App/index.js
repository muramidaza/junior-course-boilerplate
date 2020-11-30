import React from 'react';
import {connect} from 'react-redux';

import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';

import CatalogPage from '../CatalogPage';
import ProductPageContainer from '../ProductPageContainer';

import {loadData} from './actions';

class App extends React.Component {
	render() {
		return (
            <ConnectedRouter history={this.props.appHistory}>
                <>
                    <Switch>
                        <Route path="/product" render={() => (<ProductPageContainer />)} />
                        <Route path="/" render={() => (<CatalogPage />)} />
                    </Switch>
                </>
            </ConnectedRouter>
		);
	};
};


const mapDispatchToProps = dispatch => {
    return {
            getData: data => {
            dispatch(loadData(data));
        }
    };
};
  
export default connect(null, mapDispatchToProps)(App);
