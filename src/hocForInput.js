import React, {Component} from 'react';

function checkNumber(str) {
	const reg = new RegExp('^[0-9]+$');
	return reg.test(str);
}

export default function extendInput(HoccedComponent){

	return class extends Component{
		
		constructor(props) {
			super(props);
			
			const {value, onChange, ...propsForHocced  } = this.props;
			
			this.prevValue = this.value;
		}
		
		handleChange = (event) => {
			let str = event.target.value;
			
			//если инпут пустой - ничего не делаем, если была введена не цифра - возвращаем предыдущее значение в инпут, если введены только натуральное число - то передаем в обработчик
			if(str.length > 0) {
				if(checkNumber(str)) {
					this.prevValue = str;
					this.onChange(+str);
				} else {
					event.target.value = this.prevValue;
				}
			}
			
			event.preventDefault();
		}
		
		render() {
			return (
				<HoccedComponent value={this.value} onChange={handleChange} {...propsForHocced}/>
			);
		}
	}
}