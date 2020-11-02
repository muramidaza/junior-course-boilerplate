import React from 'react';

import logger from 'csssr-school-utils/lib/logger';
import shallowCompare from 'react-addons-shallow-compare';

export default class logComponent extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		if(shallowCompare(this, nextProps, nextState)) {
			logger.call(this, this.constructor.name, nextProps, nextState);
			return true;
		}
		return false;
	}	

};
