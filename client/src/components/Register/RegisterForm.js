import './RegisterForm.scss'
import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class RegisterForm extends Component {

	handleRegisterClick(e) {
		if(!this.isFormValid()) {
			e.preventDefault();
			alert('The form is invalid');
		}
	}

	isFormValid() {
		let username = document.getElementById('register-username').value;
		let email = document.getElementById('register-email').value;
		let password = document.getElementById('register-password').value;
		let confirm = document.getElementById('register-confirm-password').value;

		return (
			this.isUsernameValid(username) &&
			this.isEmailValid(email) &&
			this.isPasswordValid(password, confirm)
		);
	}

	isUsernameValid(username) {
		return true;
		// check against db
	}

	isEmailValid(email) {
		const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegExp.test(email);
		//check against db
	}

	/**
	 * This function is used to determine the validity of a password for a user. The
	 * password must be at least 8 characters in length
	 * @param  {String}  password The password for the user
	 * @param  {String}  confirm  The password confirmation for the user
	 * @return {Boolean}          Returns true if the password is valid, else false
	 */
	isPasswordValid(password, confirm) {
		return password.length >= 8 && password === confirm;
	}

	render() {
		return (
			<form className='auth-form'>
				<label
					className='register-form__input-label'
					htmlFor='username'
				>
					Username
				</label>
				<input
					className='register-form__input'
					id='register-username'
					type='text'
					name='username'
				/>
				<label
					className='register-form__input-label'
					htmlFor='email'
				>
					Email Address
				</label>
				<input
					className='register-form__input'
					id='register-email'
					type='email'
					name='email'
				/>
				<label
					className='register-form__input-label'
					htmlFor='password'
				>
					Password
				</label>
				<input
					className='register-form__input'
					id='register-password'
					type='password'
					name='password'
				/>
				<label
					className='register-form__input-label'
					htmlFor='confirm-password'
				>
					Confirm Password
				</label>
				<input
					className='register-form__input'
					id='register-confirm-password'
					type='password'
					name='confirm-password'
				/>
				<Link
					className='auth-form__submit-btn'
					to='/app'
					onClick={this.handleRegisterClick.bind(this)}
				>
					Register
				</Link>
			</form>
		);
	}

}
