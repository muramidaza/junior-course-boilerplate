import React from 'react';
import {connect} from 'react-redux';

import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';

import CatalogPage from '../CatalogPage';
import ProductPageContainer from '../ProductPageContainer';

import {loadData} from './actions';
import {selectLoading, selectError, selectSuccess} from '../../selectors'; 

class App extends React.Component {

    componentDidMount() {
        this.props.onFetchData(this.props.defaultDiscount, this.props.goodsInPage, this.props.maxRating, this.props.subPriceContent)
    }

    render() {
 		return (
            this.props.success &&
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

const mapStateToProps = (store) => {
	return {
		loading: selectLoading(store),
        error: selectError(store),
        success: selectSuccess(store)
	}
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: (defaultDiscount, goodsInPage, maxRating, subPriceContent) => {
            dispatch(loadData(defaultDiscount, goodsInPage, maxRating, subPriceContent));
        }
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
