import './Compare.scss';
import React, { Component } from 'react';

export default class Compare extends Component {

	render() {
		return (
			<section className='compare-section' id='compare'>
				<section className='compare-section__wrapper'>
					<h2 className='compare-section__header'>COMPARE DESIGNS</h2>
					<section className='compare-section__divider' />
					<p className='compare-section__text'>For more detail, designers can <b>compare different versions</b> of their designs to see which features they like or don't like.</p>
					<p className='compare-section__text'>Comparison interactions will also be available in the activity bar.</p>
				</section>
			</section>
		);
	}

}
