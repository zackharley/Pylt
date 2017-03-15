import './ActivityEntry.scss';
import React, { Component } from 'react';
import TimeService from '../../../services/time-service';

export default class ActivityEntry extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div className="activity-entry">
        <div className="syndication">
          <div className="left">
          </div>
          <div className="right">
            <p className="name">
            {
              `${this.props.activity.author.firstName.substring(0,1).toUpperCase()}. ${this.props.activity.author.lastName}`
            }
            </p>
            <p className="time">
              {
                TimeService.getTimeSince(this.props.activity.date)
              }
            </p>
          </div>
        </div>
        <div className="content">
        {
          this.props.activity.content
        }
        </div>
      </div>);
  }
}
