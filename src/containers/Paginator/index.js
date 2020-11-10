import React from 'react';
import logComponent from '../../logComponent.js';

class Paginator extends React.Component {
	handlePageChange = (event) => {
		window.location.search = 'category=' + event.target.value;
	}
	
	render() {
		return (
			<PaginatorButtons buttons={this.props.buttons} handlePageChange={handlePageChange}>
		)
	}
}