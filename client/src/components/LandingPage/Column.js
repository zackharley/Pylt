import './Column.scss';
import React, { Component } from 'react';

export default class Column extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className='column'>
				{this.props.items.map((item) => {
					return (
						<section className='column__item-wrapper'>
							<section className='column__icon-wrapper'>
								<span className='fa-stack fa-lg column__icon'>
									<i className='fa fa-circle-thin fa-stack-2x' />
									<i className={`fa ${item.iconClass} fa-stack-1x`} />
								</span>
							</section>
							<section className='column__info'>
								<h3 className='column__header'>{item.header}</h3>
								<p className='column__text'>{item.text}</p>
							</section>
						</section>
					);
				})}

			</section>
		);
	}

}
