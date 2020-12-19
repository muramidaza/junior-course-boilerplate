import React from 'react';
import { connect } from 'react-redux';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import CatalogPage from '../CatalogPage';
import ProductPageContainer from '../ProductPageContainer';
import CartPage from '../CartPage';
import Page404 from '../../components/Page404';

import InfoPage from '../../components/InfoPage';

import { loadData } from './actions';
import { selectLoading, selectError, selectSuccess } from '../../selectors';
import { API } from '../../config';

class App extends React.Component {
	componentDidMount() {
		this.props.onFetchData(API.products);
	}

	render() {
		if (this.props.loading) {
			return (
				<InfoPage title="Загрузка каталога" message="немного подождите..." />
			);
		}

		if (this.props.error) {
			return <InfoPage title="Ошибка загрузки" message={this.props.error} />;
		}

		if (this.props.success)
			return (
				<ConnectedRouter history={this.props.appHistory}>
					<>
						<Switch>
							<Route
								exact
								path={[
									'/',
									'/catalog/:category',
									'/catalog/:category/:page',
									'/catalog/:page',
								]}
								render={() => <CatalogPage />}
							/>
							<Route
								exact
								path="/product/:id"
								render={() => <ProductPageContainer />}
							/>
							<Route exact path="/cart" render={() => <CartPage />} />
							<Route render={() => <Page404 />} />
						</Switch>
					</>
				</ConnectedRouter>
			);

		//пока не началась загрузка и нет товаров - нужно что то вернуть
		return (
			<InfoPage title="Подготовка к загрузке" message="немного подождите..." />
		);
	}
}

const mapStateToProps = store => {
	return {
		loading: selectLoading(store),
		error: selectError(store),
		success: selectSuccess(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchData: (
			url,
			defaultDiscount,
			productsInPage,
			maxRating,
			subPriceContent
		) => {
			dispatch(
				loadData(
					url,
					defaultDiscount,
					productsInPage,
					maxRating,
					subPriceContent
				)
			);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
