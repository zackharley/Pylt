import './App.scss';
import React, { Component } from 'react';
import Header from './Header';
import LeftSlideout from './LeftSlideout';
import Overlay from './Overlay';
import RightSlideout from './RightSlideout';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
	  		leftMenuHidden: true,
	  		rightMenuHidden: true,
		};
  	}

  	closeLeftMenu() {
		this.setState({
	  		leftMenuHidden: true
		});
  	}

  	toggleLeftMenu() {
		this.setState({
	  		leftMenuHidden: !this.state.leftMenuHidden,
		});
  	}

  	toggleRightMenu() {
		this.setState({
	  		rightMenuHidden: !this.state.rightMenuHidden,
		});
  	}

  	componentWillMount() {
  		document.getElementById('body').classList.add('app-body');
  	}

  	componentWillUnmount() {
  		document.getElementById('body').classList.remove('app-body');
  	}

  	render() {
		const childrenWithProps = React.Children.map(
			this.props.children,
	 		(child) => React.cloneElement(child, {
	   			toggleLeftMenu: this.toggleLeftMenu,
	   			leftMenuHidden: this.state.leftMenuHidden,
	   			rightMenuHidden: this.state.rightMenuHidden,
	 		})
		);

		return (
			<section className='app-wrapper'>
				<Header
				  	closeLeftMenu={this.closeLeftMenu.bind(this)}
				  	toggleLeftMenu={this.toggleLeftMenu.bind(this)}
				  	toggleRightMenu={this.toggleRightMenu.bind(this)}
				/>
				{childrenWithProps}
		        <LeftSlideout
		          	toggleLeftMenu={this.toggleLeftMenu.bind(this)}
		          	hidden={this.state.leftMenuHidden}
		        />
		        <Overlay
		        	hidden={this.state.leftMenuHidden}
		        	toggleLeftMenu={this.toggleLeftMenu}
		        />
		        <RightSlideout hidden={this.state.rightMenuHidden} />
			</section>
		);
  	}
}
