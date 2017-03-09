import './NavMenu.scss';
import React, { Component } from 'react';
import NavMenuItem from './NavMenuItem';
import projects from '../../mock_data/project';

export default class NavMenu extends Component {

	render() {
		return (
			<nav>
				<ul className='nav-menu'>
					{projects.map(project => {
						return (
							<NavMenuItem
								title={project.name}
								projectId={project._id}
								screens={project.screens}
								toggleLeftMenu={this.props.toggleLeftMenu}
							/>
						);
					})}
				</ul>
			</nav>
		);
	}

};
