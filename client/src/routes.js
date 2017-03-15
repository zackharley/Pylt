import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import App from './components/App';
import Pilot from './components/App/Pilot';
import Project from './containers/Project';

export default (
	<Route path='/' component={LandingPage}>
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route path='/app' component={App}>
			<IndexRoute component={Pilot} />
			<Route path='/project/:ProjectName' component={Project} />
		</Route>
	</Route>
);
