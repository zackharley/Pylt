import './Version.scss';
import React, { Component } from 'react';

export default class Version extends Component {

	render() {
		return (
			<section className='version-section' id='version'>
				<section className='version-section__wrapper'>
					<h2 className='version-section__header'>VERSION CONTROL</h2>
					<section className='version-section__divider' />
					<p className='version-section__text'>Design teams are able to keep track of all versions of designs with <b>PILOT's version control capabilities</b>.</p>
					<p className='version-section__text'>Teams will <b>never lose track</b> of most recent files.</p>
				</section>
			</section>
		);
	}

}
