import './AddProject.scss';
import React, { Component } from 'react';

export default class AddProject extends Component {

	constructor(props) {
		super(props);
	}

	handleClick(e) {
		console.log('add project');
		this.props.setNewProjectVisibility(true);
	}

	render() {
		return (
			<section className='add-project' onClick={this.handleClick.bind(this)}>
				<span className='fa-stack fa-lg add-project__icon-stack'>
				  	<i className='fa fa-circle fa-stack-2x add-project__icon-circle' />
				  	<i className='fa fa-plus fa-stack-1x fa-inverse' />
				</span>
			</section>
		);
	}

}
