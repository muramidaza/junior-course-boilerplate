import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import data from './products.json';

let products = data.slice(0, 3);

class GoodItem extends React.Component {
	render() {
		return (<li className="goodItem"> {this.props.good.name} </li>);
	}
}

class GoodsList extends React.Component {
	render() {
		return (
			<div className="goodsList">
				<h2>Goods list</h2>
				<ul>
					{products.map(good => (<GoodItem key={good.id} good={good}/>))}
				</ul>
			</div>
		)
	}
}

function App() {
	return (
		<GoodsList />
	)
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);