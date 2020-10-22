import React from 'react';

import logger from 'csssr-school-utils/lib/logger';
import shallowCompare from 'react-addons-shallow-compare';

class logComponent extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		logger.call(this, this.constructor.name, nextProps, nextState);
		return shallowCompare(this, nextProps, nextState);
	}	

};

export {logComponent};