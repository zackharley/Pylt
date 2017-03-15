import './LoginForm.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			rememberMe: false
		}
	}

	onRememberMeClick(e) {
		this.setState({
			rememberMe: !this.state.rememberMe
		});
	}

	render() {
		return (
			<form className='auth-form'>
				<input className='auth-form__input' type='email' placeholder='Email Address' />
				<input className='auth-form__input' type='password' placeholder='Password' />
				<section className='login-form__middle-row'>
					<section className='login-form__remember-wrapper'>
						<input
							className='login-form__remember-checkbox'
							type='checkbox'
							name='remember-me'
							checked={this.state.rememberMe}
							onClick={this.onRememberMeClick.bind(this)}
						/>
						<label
							className='login-form__remember-label'
							htmlFor='remember-me'
							onClick={this.onRememberMeClick.bind(this)}
						>
							Remember me
						</label>
					</section>
					<Link className='login-form__forgot-link'>Forgot your password?</Link>
				</section>
				<Link className='auth-form__submit-btn' to='/app'>Sign In</Link>
				<section className='login-form__bottom-row'>
					<p className='login-form__register-text'>
						Don't have an account yet? - <Link to='/register' className='login-form__register-link'>Register here</Link>.
					</p>
				</section>
			</form>
		);
	}

}
