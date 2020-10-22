import React from 'react';

import logger from 'csssr-school-utils/lib/logger';

class logComponent extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		logger.call(this, this.constructor.name, nextProps, nextState);
		return true;
	}	

};

export {logComponent};