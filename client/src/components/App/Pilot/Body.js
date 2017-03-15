import './Body.scss'
import React, { Component } from 'react';
import AddProject from './AddProject';
import ProjectTile from './ProjectTile';
import NewProject from './NewProject';
import axios from 'axios';

export default class Body extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			isNewProjectVisible: false
		};
	}

	componentDidMount() {
		this.loadProjects();
	}

	loadProjects() {
		let _this = this;
		this.serverRequest = axios.get('/api/project')
			.then((result) => {
				_this.setState({
					projects: result.data
				})
			})
			.catch((e) => {
				console.error(e);
			});
	}

	setNewProjectVisibility(visibility) {
		this.setState({
			isNewProjectVisible: visibility
		});
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render() {
		return (
			<section className='content-wrapper'>
				<AddProject setNewProjectVisibility={this.setNewProjectVisibility.bind(this)} />
				{this.state.projects.map((project, index) => {
					console.log(project);
					return (
						<ProjectTile
							projectId={project._id}
							key={index}
							name={project.name}
							description={project.description}
							image={project.image}
						/>
					);
				})}
				{
					this.state.isNewProjectVisible ?
					<NewProject
						setNewProjectVisibility={this.setNewProjectVisibility.bind(this)}
						loadProjects={this.loadProjects.bind(this)}
					/> :
					''
				}
			</section>
		);
	}

}
