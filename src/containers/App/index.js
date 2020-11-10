import React from 'react';
import {connect} from 'react-redux';
import {loadInitData} from '../../actions'
import {initialState} from '../../initialState.js'

import ProductsPage from '../ProductsPage';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.props.handleLoadInitData(initialState);
	}
	
	render() {
		return (
			<ProductsPage />
		);
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoadInitData: (data) => {
			dispatch(loadInitData(data))
		}
	}
}

export default connect(null, mapDispatchToProps)(App)
