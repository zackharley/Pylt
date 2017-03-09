import './About.scss';
import React, { Component } from 'react';
import Column from './Column';

export default class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pointsOne: [
				{
					iconClass: 'fa-paint-brush',
					header: 'BUILT FOR DESIGNERS',
					text: 'PILOT was created with designers in mind: a clean UI and easy to use.'
				},
				{
					iconClass: 'fa-paper-plane',
					header: 'EASIER COMMUNICATION',
					text: 'PILOT removes the reliance on email and instant messaging for in-team collaboration, making working together easier than ever.'
				}
			],
			pointsTwo:[
				{
					iconClass: 'fa-gavel',
					header: 'MAKE DECISIONS',
					text: 'PILOT is built improve decision-making throughout the whole design lifecylcle. Get feedback before you make your decisions.'
				},
				{
					iconClass: 'fa-cloud-upload',
					header: 'SHARE YOUR DESIGNS',
					text: 'With PILOT, uploading files to share with your teams is as easy as drag and drop.'
				}
			]
		}
	}

	handleArrowClick(e) {
		document.querySelector('#comment')
			.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return (
			<section className='about-section' id='about'>
				<h2 className='about-section__header'>MEET PILOT</h2>
				<h3 className='about-section__about'>
					In the fast-paced world we live in, communication is everything.
					Keeping your team up to date, while keeping your projects organized
					can be a hassle. That's where we come in! Introducing PILOT, a
					collaboration tool for designers.
				</h3>
				<section className='about-section__points'>
					<Column items={this.state.pointsOne} />
					<Column items={this.state.pointsTwo} />
				</section>
				<i
					className='fa fa-angle-down about-section__down-arrow'
					onClick={this.handleArrowClick.bind(this)}
				/>
			</section>
		);
	}
}
