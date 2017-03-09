import './Body.scss'
import React, { Component } from 'react';
import ProjectTile from './ProjectTile';
import data from './../../../mock_data/project';

export default class Body extends Component {

	render() {
		return (
			<section className='content-wrapper'>
				{data.map((entry, index) => {
					console.log(entry);
					return (
						<ProjectTile
							projectId={entry._id}
							key={index}
							name={entry.name}
							description={entry.description}
							image={entry.image}
						/>
					);
				})}
			</section>
		);
	}

}
