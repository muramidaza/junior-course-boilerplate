import React from 'react';

import logger from 'csssr-school-utils/lib/logger';
import shallowCompare from 'react-addons-shallow-compare';

class logComponent extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps);
		console.log(this.props);
		console.log(nextState);
		console.log(this.state);
		
		logger.call(this, this.constructor.name, nextProps, nextState);
		return shallowCompare(this, nextProps, nextState);
	}	

};

export {logComponent};