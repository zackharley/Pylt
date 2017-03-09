import './RightSlideout.scss'
import React, { Component } from 'react';
import RightSlideoutActivityFeed from './RightSlideoutActivityFeed';

export default class RightSlideout extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className={this.props.hidden ? 'right-slideout' : 'right-slideout right-slideout-open'}>
				<RightSlideoutActivityFeed />
			</section>
		);
	}

}
