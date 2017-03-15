import './Login.scss';
import React, { Component } from 'react';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';

export default class Login extends Component {

	render() {
		return(
			<section className='auth'>
				<LoginLeft />
				<LoginRight />
			</section>
		);
	}

}
