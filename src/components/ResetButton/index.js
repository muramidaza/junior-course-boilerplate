import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default class ResetButton extends React.PureComponent {
	
	render() {
		return (
			<div className="resetBlock">
				<Link to='/' className="resetBlock__resetLink" onClick={this.props.onClickReset}>Сбросить фильтры</Link>
			</div>
		);
	};
};
