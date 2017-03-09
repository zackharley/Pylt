import './header.scss';
import React, { Component } from 'react';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	handleLogoClick(e) {
		document.querySelector('#initial')
			.scrollIntoView({ behavior: 'smooth' });
	}

	handleAboutClick(e) {
		e.preventDefault();
		document.querySelector('#about')
			.scrollIntoView({ behavior: 'smooth' });
	}

	handleFeaturesClick(e) {
		e.preventDefault();
		document.querySelector('#comment')
			.scrollIntoView({ behavior: 'smooth' });
	}

	handleTeamClick(e) {
		e.preventDefault();
		document.querySelector('#team')
			.scrollIntoView({ behavior: 'smooth' });
	}

	render() {

		return (
			<header style={this.props.headerStyle} className='header'>
          		<img
          			className='header__logo'
          			src='/images/logo.png'
          			alt='Pylt logo'
          			onClick={this.handleLogoClick.bind(this)}
          		/>
				<nav className='header__nav'>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<a
								className='header__nav-link'
								href=''
								onClick={this.handleAboutClick.bind(this)}
							>
								About
							</a>
						</li>
						<li className='header__nav-item'>
							<a
								className='header__nav-link'
								href=''
								onClick={this.handleFeaturesClick.bind(this)}
							>
								Features
							</a>
						</li>
						<li className='header__nav-item'>
							<a
								className='header__nav-link'
								href=''
								onClick={this.handleTeamClick.bind(this)}
							>
								Team
							</a>
						</li>
					</ul>
				</nav>
      		</header>
		);
	}
}
