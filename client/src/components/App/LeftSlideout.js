import './LeftSlideout.scss';
import React, { Component } from 'react';
import NavMenu from './NavMenu';

export default class LeftSlideout extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className={this.props.hidden ? 'left-slideout' : 'left-slideout left-slideout-open'}>
				<NavMenu toggleLeftMenu={this.props.toggleLeftMenu} />
			</section>
		);
	}

}
