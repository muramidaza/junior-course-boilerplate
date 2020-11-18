import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default class ResetButton extends React.PureComponent {
	
	render() {
		return (
			<Link to='/'>Сбросить фильтры</Link>
		);
	};
};
