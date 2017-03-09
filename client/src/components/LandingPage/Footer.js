import './Footer.scss';
import React, { Component } from 'react';

export default class Footer extends Component {

	handleLogoClick(e) {
		e.preventDefault();
		document.querySelector('#initial')
			.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return (
			<footer className='footer' id='footer'>
				<p className='footer__copyright'>&copy; 2017 PILOT. All Rights Reserved.</p>
				<a href='' onClick={this.handleLogoClick.bind(this)} >
					<img src='/images/logo.png' className='footer__logo' />
				</a>
				<section className='footer__social'>
					<a href='https://facebook.com' className='footer__social-link'>
						<i className='fa fa-facebook footer__social-icon' />
					</a>
					<a href='https://twitter.com' className='footer__social-link'>
						<i className='fa fa-twitter footer__social-icon' />
					</a>
					<a href='https://dribbble.com' className='footer__social-link'>
						<i className='fa fa-dribbble footer__social-icon' />
					</a>
				</section>
			</footer>
		);
	}

}
