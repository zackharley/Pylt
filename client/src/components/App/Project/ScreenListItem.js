import './ScreenListItem.scss';
import React, { Component } from 'react';

export default class ScreenListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='screen-wrapper'>
				<div
					className='screen-wrapper__image'
					style={{backgroundImage: `url(${this.props.screen.image})`}}
				/>
				<div className='screen-wrapper__title'>
					{this.props.screen.name}
				</div>
			</div>
		);
	}
}
