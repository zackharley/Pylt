import './LoginRight.scss'
import React, { Component } from 'react';
import LoginForm from './LoginForm';

export default class LoginRight extends Component {

	render() {
		return (
			<section className='auth-right'>
				<img className='auth-right__logo' src='/images/logo.png' />
				<LoginForm />
			</section>
		);
	}
}
