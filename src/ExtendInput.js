import React, {Component} from 'react';

function checkNumber(str) {
	const reg = new RegExp('^[0-9]+$');
	return reg.test(str);
}

export default function ExtendInput(HoccedInput){

	return class extends Component{
		
		constructor(props) {
			super(props);
			
			this.prevValue = this.props.value;
			this.onChange = this.props.onChange;
		}
		
		handleChange = (event) => {
			
			let str = event.target.value;
					
			if(str.length > 0) {
				if(checkNumber(str)) {
					this.prevValue = str;
					this.onChange(+str);
				} else {
					console.log('str=' + str);
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
				<HoccedInput value={value} onChange={this.handleChange} {...propsForHocced}/>
			);
		}
	}
}