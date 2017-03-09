import './Initial.scss';
import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Initial extends Component {

	handleButtonClick(e) {
		console.log('Going to dashboard');
	}

	handleArrowClick(e) {
		document.querySelector('#about')
			.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return(
			<section className='initial' id='initial'>
				<section className='intial__text-wrapper'>
					<h2 className='initial__text'>CREATE TOGETHER, BETTER.</h2>
					<Link to='/login'>
						<button
							className='initial__call-to-action'
							onClick={this.handleButtonClick.bind(this)}
						>
							TRY IT FOR FREE!
						</button>
					</Link>
				</section>
				<i
					className='fa fa-angle-down initial__down-arrow'
					onClick={this.handleArrowClick.bind(this)}
				/>
			</section>
		);
	}

}
