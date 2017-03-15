import './Activity.scss';
import React, { Component } from 'react';
import ActivityEntry from './ActivityEntry';

export default class Activity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='acitivy_sidebar'>
      {
        !this.props.noHeader ? <div className='activity_heading'>
          Activity
        </div> : null
      }
      <ul className='activity_list'>
        {
          this.props.activities.map((activity, index) => {
            let key = `activity-list-${index}`;
            return <li key={key}><ActivityEntry activity={activity} /></li>
          })
        }
      </ul>
      <input type='text' placeholder='Write a comment...' />
    </div>);
  }
}
