import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import data from './products.json';

const goodInPage = 3;

const products = data.slice(0, goodInPage);

class GoodItem extends React.Component {
	render() {
		return (<li className="goodItem"> {this.props.good.name} </li>);
	}
}

class GoodsPage extends React.Component {
	render() {
		return (
			<div className="goodsPage">
				<h2 className="header">Goods list</h2>
				<ul className="goodsList">
					{products.map(good => (<GoodItem key={good.id} good={good}/>))}
				</ul>
			</div>
		)
	}
}

function App() {
	return (
		<GoodsPage />
	)
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);