import './Pilot.scss'
import React, { Component } from 'react';
import Body from './Body';

export default class Pilot extends Component {

	render() {
		return (
			<div className='main-page'>
				<h1 className='main-page__title'>Projects</h1>
				<Body />
			</div>
		);
	}

}
