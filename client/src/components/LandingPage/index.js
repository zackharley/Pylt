import './LandingPage.scss';
import React, { Component } from 'react';
import Header from './Header';
import Initial from './Initial';
import InitialOverlay from './InitialOverlay';
import About from './About';
import Comment from './Comment';
import CommentOverlay from './CommentOverlay';
import Compare from './Compare';
import CompareOverlay from './CompareOverlay';
import Version from './Version';
import VersionOverlay from './VersionOverlay';
import Team from './Team';
import TeamOverlay from './TeamOverlay';

export default class LandingPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return this.props.children ? (
			<section>
				{this.props.children}
			</section>
		) : (
			<section className='landing-page'>
				<Header />
				<Initial />
				<InitialOverlay />
				<About />
				<Comment />
				<CommentOverlay />
				<Compare />
				<CompareOverlay />
				<Version />
				<VersionOverlay />
				<Team />
				<TeamOverlay />
			</section>
		);
	}

}
