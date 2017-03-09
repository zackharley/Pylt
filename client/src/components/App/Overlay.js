import './Overlay.scss';
import React, { Component } from 'react';

export default class Overlay extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section
				onClick={this.props.toggleLeftMenu}
				className={this.props.hidden ? 'overlay hidden' : 'overlay'}
			/>
		);
	}

};
