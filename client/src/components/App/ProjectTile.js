import './ProjectTile.scss';
import React from 'react';
import { Link } from 'react-router';

export default class ProjectTile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			overlayActive: false
		}
	}

	handleMouseEnter(event) {
		console.log('Mouse in');
		this.setState({
			overlayActive: true
		});
	}

	handleMouseLeave(event) {
		console.log('Mouse out');
		this.setState({
			overlayActive: false
		});
	}

	render() {
		return (
			<Link className='project-tile__wrapper' to={`/project/${this.props.projectId}`}>
				<section
					className='project-tile'
					style={{backgroundImage: `url(${this.props.image})`}}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>
					<section className={this.state.overlayActive ? 'project-tile__overlay' : 'project-tile--hidden project-tile__overlay'} >
						<h3 className='project-tile__name'>{this.props.name}</h3>
						<p className='project-tile__description'>{this.props.description}</p>
					</section>
				</section>
			</Link>
		);
	}

};
