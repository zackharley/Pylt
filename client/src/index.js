import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/configureStore';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

import activityData from './raw_data/activities';
import projectData from './raw_data/project';

import routes from './routes';

const _store = {
	projects: [],
	project: projectData,
	activities: activityData
};

const setup = () => {
	const store = configureStore(_store);
	const history = syncHistoryWithStore(hashHistory, store);

	render(
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>,
		document.getElementById('wrapper')
	);
};

setup();