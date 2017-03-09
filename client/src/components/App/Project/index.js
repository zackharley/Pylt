import './Project.scss';
import React, { Component } from 'react';
import Activity from './Activity';
import ScreenListItem from './ScreenListItem';

import projects from './../../../mock_data/project';

export default class Project extends Component {

  constructor(props) {
    super(props);
    this.showScreen = this.showScreen.bind(this);
    this.state = {
      showTeamAdd: false,
      showNewScreen: false,
      showScreen: null,
      addTeamMemberSearch: '',
    };
  }

  toggleTeamAdd() {
    this.setState({ showTeamAdd: !this.state.showTeamAdd });
  }

  newScreen() {
    this.setState({ showNewScreen: true });
  }

  cancelCreateScreen() {
    this.setState({ showNewScreen: false });
  }

  showScreen(target) {
    this.setState({ showScreen: target });
  }

  exitScreen() {
    this.setState({ showScreen: null });
  }

  changeSearch(e) {
    if (e.target.value.length > 0) {
      this.setState({ addTeamMemberSearch: e.target.value });
    } else {
      this.setState({ addTeamMemberSearch: '' });
    }
  }

  render() {

    let showAddNewMember = `add_team_member ${this.state.showTeamAdd ? ' show' : ''}`;

    const screenNames = projects[parseInt(this.props.routeParams.ProjectName)].screens.map(screen => {
      return screen.name;
    });

    let newScreenOptions = ['New Screen'].concat(screenNames);

    return (<div className="project">
          {
            this.state.showScreen !== null ? <div className="show_screen">
              <div className="container">
                <img src={this.props.project.screens[this.state.showScreen].img} />
                <div className="activity">
                  <Activity noHeader={true} activities={this.props.activities} />
                </div>
                <div onClick={this.exitScreen.bind(this)} className="exit"></div>
              </div>
            </div> : null
          }
          {
            this.state.showNewScreen ? <div className="new_screen">
              <div className="container">
                <h1>Create Screens</h1>
                <a onClick={this.cancelCreateScreen.bind(this)} className="exit"></a>
                <div className="box">
                  <ul>
                    {
                      newScreenOptions.map((screenName, index) => {
                        return index === 0 ?
                          <li><div className="screen_image"><i className="fa fa-plus" aria-hidden="true"></i></div><div className="text">{screenName}</div></li> :
                          <li><div className="screen_image"></div><div className="text">{screenName}</div></li>;
                      })
                    }
                  </ul>
                </div>
              </div>
            </div> : null
          }
          <section className="left">
            <div className="project_info">
              <div className="left">
                <img src={this.props.project.image} />
                <h2 className="project_name">
                  {
                    projects[parseInt(this.props.routeParams.ProjectName)].name
                  }
                </h2>
              </div>
              <div className="right_menu">
                <a className="show_new_screen" onClick={this.newScreen.bind(this)}></a>
                <a className="show_team" onClick={this.toggleTeamAdd.bind(this)}>
                {
                  <div className={showAddNewMember}>
                    <div className="container">
                      <input type="text" value={this.state.addTeamMemberSearch} onChange={this.changeSearch.bind(this)}/>
                      <ul>
                        {
                          this.props.project.users.map((user, index) => {
                            let key = `user-list-${index}`;
                            const search = this.state.addTeamMemberSearch;
                            if (search.length > 0 && search.indexOf(user.firstName) === -1 && search.indexOf(user.lastName) === -1) {
                              return null;
                            }
                            return <li key={key}><img src={user.image} />{user.firstName + ' ' + user.lastName}</li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                }
                </a>
              </div>
            </div>
            <ul>
              {
                projects[parseInt(this.props.routeParams.ProjectName)].screens.map((screen, index) => {
                  return <li key={`screen-${index}`} onClick={() => this.showScreen(index)}><ScreenListItem screen={screen}/></li>;
                })
              }
            </ul>
          </section>
        </div>
      );
  }
}
