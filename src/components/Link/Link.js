import React from 'react';

import './index.css';

export default class Link extends React.PureComponent {

	render() {
		return (
			<a href={'/?currentpage=' + this.props.numPage} data-currentpage={this.props.numPage} onClick={this.props.handleLinkClick} className={+this.props.currentPage == +this.props.numPage ? 'paginator__item-active' : 'paginator__item'}>
				{this.props.numPage + 1}
			</a>
		);
	}
}
