// Styles are the same as for the `Login` component
import React, { Component } from 'react';
import RegisterLeft from './RegisterLeft';
import RegisterRight from './RegisterRight';

export default class Register extends Component {

	render() {
		return (
			<section className='auth'>
				<RegisterLeft />
				<RegisterRight />
			</section>
		);
	}

}
