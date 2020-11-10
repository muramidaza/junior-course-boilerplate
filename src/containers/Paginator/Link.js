import React from 'react';
import {connect} from 'react-redux';
import {changePage}  from '../../actions';
import logComponent from '../../logComponent.js';

class Link extends logComponent {
	handleLinkClick = (event) => {
		event.preventDefault();
		this.props.handleChangePage(+this.props.numPage);
	}

	render() {
		return (
			<a href={'/?currentpage=' + this.props.numPage} onClick={this.handleLinkClick} className={+this.props.currentPage == +this.props.numPage ? 'paginator__item-active' : 'paginator__item'}>
				{this.props.numPage + 1}
			</a>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangePage: (value) => {
			dispatch(changePage(value))
		}
	}
}

const mapStateToProps = (state) => {
	return {
		currentPage: state.currentPage
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)