import './NavMenuItem.scss';
import React, { Component } from 'react';

export default class NavMenuItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	handleCaretClick() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleLinkClick() {
		this.props.toggleLeftMenu();
	}

	render() {
		return (
			<li className='nav-menu__item'>
				<section className='nav-menu__project-wrapper'>
					<i
						className={`nav-menu__project-caret fa fa-caret-${this.state.isOpen ? 'down' : 'right'}`}
						aria-hidden='true'
						onClick={this.handleCaretClick.bind(this)}
					/>
					<a
						href={`#/project/${this.props.projectId}`}
						className='nav-menu__project-link'
						onClick={this.handleLinkClick.bind(this)}
					>
						{this.props.title}
					</a>
					</section>
					{
						this.state.isOpen ?
						<ul className='nav-menu__screens-wrapper'>
							{this.props.screens.map((screen, index) => {
								return (
									<li key={`nav-${screen.name}-${index}`} className='nav-menu__screen'>
										{screen.name}
									</li>
								);
							})}
						</ul> :
						''
					}
			</li>
		);
	}

};
