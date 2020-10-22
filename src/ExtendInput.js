import React, {Component} from 'react';

function checkNumber(str) {
	const reg = new RegExp('^[0-9]+$');
	return reg.test(str);
}

export default function ExtendInput(HoccedComponent){

	return class extends Component{
		
		constructor(props) {
			super(props);
			
			this.prevValue = this.props.value;
			this.onChange = this.props.onChange;
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
			} else {
				this.onChange(0);
			}
			
			event.preventDefault();
		}
		
		render() {
			const {value, onChange, ...propsForHocced} = this.props;
			
			return (
				<HoccedComponent value={value} onChange={this.handleChange} {...propsForHocced}/>
			);
		}
	}
}