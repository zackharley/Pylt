import './LoginLeft.scss';
import React, { Component } from 'react';

export default class LoginLeft extends Component {

	render() {
		return (
			<section className='auth-left login-left'>
				<section className='auth-left__overlay'>
					<p className='auth-left__text'>
						<q className='auth-left__quote'>When it comes to the future, it's far more important to be imaginative than to be right.</q>
						 — Alvin Toffler
					</p>
				</section>
			</section>
		);
	}
}
