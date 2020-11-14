import React from 'react';

import logComponent from '../../logComponent.js';

import './index.css';

export default class Link extends logComponent {

	render() {
		return (
			<a href={'/?currentpage=' + this.props.numPage} data-currentpage={this.props.numPage} onClick={this.props.handleLinkClick} className={+this.props.currentPage == +this.props.numPage ? 'paginator__item-active' : 'paginator__item'}>
				{this.props.numPage + 1}
			</a>
		);
	}
}
