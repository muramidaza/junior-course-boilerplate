import React from 'react';
import logComponent from '../../logComponent.js';
import {changePage}  from '../../actions';

class Link extends React.Component {
	handleLinkClick = (event) => {
		event.preventDefault();
		this.props.changePage(+this.props.href.substring(10));
	}

	render() {
		return (
			<a href={this.props.href} onClick={this.handleLinkClick}>
				{this.props.children};
			</a>
		);
	}
}

connect(null, dispatch => {
   return {
       changePage: (url) => dispatch(changePage(url))
   }
})(Link);

export default class Paginator extends logComponent {
	render() {
		return (
			<div className="paginator">
			
				{for (let i = 1; i <= amountPages; i++) {
					
				}
			
			</div>
		)
	}
}