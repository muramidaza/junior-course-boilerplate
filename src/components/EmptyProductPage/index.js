import React from 'react';

import ElementLamp from '../SVGLamp/svglamp.svg';

import './index.css';

export default class EmptyProductPage extends React.PureComponent {
	
	render() {
		return (
            <div className="emptyPage">
                <p className='emptyPage__title'>
					<a className='emptyPage__linkBack' href='/' onClick={this.props.onGoBack}>&#8592;</a>
					Товар не найден
				</p>
                <img src={ElementLamp} alt='Lamp' className='emptyPage__svgElement'/>
            </div>
		);
	};
};


