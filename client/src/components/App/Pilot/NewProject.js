import './NewProject.scss';
import React, { Component } from 'react';
import axios from 'axios';

export default class NewProject extends Component {

	constructor(props) {
		super(props);
	}

	closeOverlay(e) {
		if(e.target.classList.toString() === e.currentTarget.classList.toString()) {
			this.props.setNewProjectVisibility(false);
		}
	}

	handleCreateClick(e) {
		let name = document.getElementById('new-project__name').value;
		let image = document.getElementById('new-project__img').value;
		let description = document.getElementById('new-project__description').value;

		let project = {
			name,
			image,
			description
		};

		// We also want to make sure that the organization doesn't already have a
		// project with this name (TODO)
		if(this.isNameValid(name) && this.isImageValid(image)) {
			let _this = this;
			axios.post('/api/project', project)
				.then((response) => {
					if(response.status === 200) {
						_this.props.loadProjects();
						_this.props.setNewProjectVisibility(false);
					} else {
						console.log(response);
					}

				})
				.catch((error) => {
					console.error(error);
					// indicate failure
					// explain failure
				})
		}
	}

	isNameValid(name) {
		return name.length > 0;
	}

	isImageValid(url) {
		const urlRegExp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
		return urlRegExp.test(url);
	}

	render() {
		return (
			<section className='new-project__overlay' onClick={this.closeOverlay.bind(this)}>
				<section className='new-project'>
					<section className='new-project__wrapper'>
						<section className='new-project__header'>
							<h2 className='new-project__title'>Create a Project</h2>
							<i className='fa fa-close new-project__close' onClick={this.closeOverlay.bind(this)} />
						</section>
						<label className='new-project__label' htmlFor='new-project__name'>Name</label>
						<input
							className='new-project__input'
							type='text'
							name='new-project__name'
							id='new-project__name'
						/>
						<label className='new-project__label' htmlFor='new-project__img'>Image URL</label>
						<input
							className='new-project__input'
							type='text'
							name='new-project__img'
							id='new-project__img'
						/>
						<label className='new-project__label' htmlFor='new-project__description'>
							Description <span className='new-project--optional'>(optional)</span>
						</label>
						<textarea className='new-project__textarea' id='new-project__description' />
						<button
							className='new-project__create'
							onClick={this.handleCreateClick.bind(this)}
						>
							Create
						</button>
					</section>
				</section>
			</section>
		);
	}

}
