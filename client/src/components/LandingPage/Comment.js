import './Comment.scss';
import React, { Component } from 'react';

export default class Comment extends Component {

	render() {
		return (
			<section className='comment-section' id='comment'>
				<section className='comment-section__wrapper'>
					<h2 className='comment-section__header'>LIVE COMMENTING</h2>
					<section className='comment-section__divider' />
					<p className='comment-section__text'>PILOT allows designers to share their opinions and thoughts on team members' designs which create a <b>clear line of feedback</b> to the team.</p>
					<p className='comment-section__text'>All commenting activity is organized in the <b>activity bar</b> making it easy for team members to follow along.</p>
				</section>
			</section>
		);
	}

}
