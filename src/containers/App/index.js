import React from 'react';
import {connect} from 'react-redux';

import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';

import CatalogPage from '../CatalogPage';
import ProductPageContainer from '../ProductPageContainer';

import InfoPage from '../../components/InfoPage';

import {loadData} from './actions';
import {selectLoading, selectError, selectSuccess} from '../../selectors'; 

class App extends React.Component {

    componentDidMount() {
        this.props.onFetchData(this.props.url, this.props.defaultDiscount, this.props.goodsInPage, this.props.maxRating, this.props.subPriceContent)
    }

    render() {
        if(this.props.loading) return (<InfoPage title={'Загрузка каталога'} message='немного подождите...'/>);
        
        if(this.props.error) return (<InfoPage title={'Ошибка загрузки'} message={this.props.error}/>);
        
        if(this.props.success) return (
            <ConnectedRouter history={this.props.appHistory}>
                <>
                    <Switch>
                        <Route path="/product" render={() => (<ProductPageContainer />)} />
                        <Route path="/" render={() => (<CatalogPage />)} />
                    </Switch>
                </>
            </ConnectedRouter>
        );
        
        //пока не началась загрузка и нет товаров - нужно что то вернуть
        return (<InfoPage title={'Подключение к серверу'} message='немного подождите...'/>);
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
        onFetchData: (url, defaultDiscount, goodsInPage, maxRating, subPriceContent) => {
            dispatch(loadData(url, defaultDiscount, goodsInPage, maxRating, subPriceContent));
        }
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
