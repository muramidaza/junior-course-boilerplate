import React from 'react';

import './index.css';

export default class InfoPage extends React.PureComponent {
	
	render() {
		return (
            <div className="infoPage">
                <p className='infoPage__title'>{this.props.title}</p>
                <p className='infoPage__message'>{this.props.message}</p>
            </div>
		);
	};
};


