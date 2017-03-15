import './Projects.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Projects extends Component {

	render() {
		return (
			<section className='projects-page'>
				<h1 className='projects-page__title'>
					<Link to='/app'>Projects</Link>
					/{this.props.routeParams.ProjectName}
				</h1>
			</section>
		);
	}

}
