import './LoginLeft.scss';
import React, { Component } from 'react';

export default class LoginLeft extends Component {

	render() {
		return (
			<section className='login-left'>
				<section className='login-left__overlay'>
					<p className='login-left__text'>
						<q className='login-left__quote'>When it comes to the future, it's far more important to be imaginative than to be right.</q>
						 — Alvin Toffler
					</p>
				</section>
			</section>
		);
	}
}
