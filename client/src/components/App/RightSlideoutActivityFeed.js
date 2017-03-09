import './RightSlideoutActivityFeed.scss';
import React, { Component } from 'react';
import activities from '../../raw_data/activities';
import ActivityEntry from './ActivityEntry';


export default class RightSlideoutActivityFeed extends Component {

	render() {

		return (
			<section className='rs-activity-feed'>
				<div className="activity_heading">Activity</div>
				<ul className="activity_list">
			      {/*
			        this.props.activities.map((activity, index) => {
			          let key = `activity-list-${index}`;
			          return <li key={key}><ActivityEntry activity={activity} /></li>
			        })
			      */}
			    	{
			    		activities.map((activity, index) => {
			    			let key = `activity-list-${index}`;
			    			return <li key={key}><ActivityEntry activity={activity} /></li>
			    		})
			     	}
			    </ul>
			    <input className="activity_entry" type="text" placeholder="Write a comment..." />
			</section>
		);
	}

}
