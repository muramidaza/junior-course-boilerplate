import React, { Component } from 'react';

function checkNumber(str) {
	const reg = new RegExp('^[0-9]+$');
	return reg.test(str);
}

export default function ExtendInput(HoccedInput) {
	return class extends Component {
		constructor(props) {
			super(props);

			this.state = {
				value: this.props.value,
			};

			this.onChange = this.props.onChange;
		}

		handleChange = event => {
			const str = event.target.value;

			if (str.length) {
				if (checkNumber(str)) {
					this.setState({ value: +str }, () => this.onChange(this.state.value));
				} else {
					return this.state.value;
				}
			} else {
				this.setState({ value: 0 }, () => this.onChange(0));
			}

			event.preventDefault();
		};

		render() {
			const { value, onChange, ...propsForHocced } = this.props;
			return (
				<HoccedInput
					value={value}
					onChange={this.handleChange}
					{...propsForHocced}
				/>
			);
		}
	};
}
