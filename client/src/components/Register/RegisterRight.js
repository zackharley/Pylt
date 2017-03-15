import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

export default class RegisterRight extends Component {

	render() {
		return (
			<section className='auth-right'>
				<img className='auth-right__logo' src='/images/logo.png' />
				<RegisterForm />
			</section>
		);
	}
}
