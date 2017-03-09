require('./Team.scss');
import React, { Component } from 'react';
import Headshot from './Headshot';
import Footer from './Footer';

export default class Team extends Component {
	render() {
		const team = [
			{
				firstName: 'Forrest',
				lastName: 'Herlick',
				position: 'Product Manager',
				linkedin: 'https://linkedin.com/in/forrest-herlick-2b249073/'
			}, {
				firstName: 'Jake',
				lastName: 'Alsemgeest',
				position: 'Software Developer',
				linkedin: 'https://linkedin.com/in/jalsemgeest/'
			}, {
				firstName: 'Zack',
				lastName: 'Harley',
				position: 'Lead Software Developer',
				linkedin: 'https://linkedin.com/in/zackharley/'
			}, {
				firstName: 'Liat',
				lastName: 'Fainman',
				position: 'Junior Analyst',
				linkedin: 'https://linkedin.com/in/liat-fainman-aaa00977/'
			}, {
				firstName: 'Alex',
				lastName: 'Lorant',
				position: 'Junior Analyst',
				linkedin: 'https://linkedin.com/in/alexlorant/'
			}
		];
		return (
			<section className='team' id='team'>
				<section className='team__wrapper'>
					<h2 className='team__header'>OUR TEAM</h2>
					<h3 className='team__sub-header'>We are a team of Commerce and Engineering student’s apart of QTMA, working on the development of PILOT, being funded by the Queen’s Smith School of Business.</h3>
					<section className='team__headshots'>
						{team.map((member) => {
							return (
								<Headshot member={member} />
							);
						})}
					</section>
					<section className='team__subscribe'>
						<h2 className='team__subscribe__header'>SUBSCRIBE TO OUR NEWSLETTER</h2>
						<section className='team__subscribe__input-wrapper'>
							<input placeholder='Put your email here!' type='email' className='team__subscribe__input' />
							<button className='team__subscribe__btn'>SUBSCRIBE</button>
						</section>
					</section>
					<Footer />
				</section>
			</section>
		);
	}
}
