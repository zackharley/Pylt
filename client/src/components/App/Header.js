import './Header.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className='app-header'>
				<a className='app-header__icon-wrapper' onClick={this.props.toggleLeftMenu}>
					<i className='fa fa-bars' aria-hidden='true' />
				</a>
				<Link to='/app' onClick={this.props.closeLeftMenu} className='app-header__logo-wrapper'>
					<img src='/images/logo.png' className='app-header__logo' />
				</Link>
				<a className='app-header__icon-wrapper app-header__icon-wrapper--right-align' onClick={this.props.toggleRightMenu}>
					<i className='fa fa-ellipsis-v' aria-hidden='true'/>
				</a>
			</header>
		);
	}

};
