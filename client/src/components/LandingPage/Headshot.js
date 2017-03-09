import './Headshot.scss';
import React, { Component } from 'react';

export default class Headshot extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<section className='headshot'>
				<section style={{backgroundImage: `url(/images/headshots/${this.props.member.firstName.toLowerCase()}.jpg)`}} className='headshot__image'>
					<section className='headshot__image--overlay'>
						<a target='_blank' href={this.props.member.linkedin}>
							<i className='fa fa-linkedin-square headshot__linkedin'/>
						</a>
					</section>
				</section>
				<p className='headshot__name'>{this.props.member.firstName} {this.props.member.lastName}</p>
				<p className='headshot__position'>{this.props.member.position}</p>
			</section>
		);
	}

}
