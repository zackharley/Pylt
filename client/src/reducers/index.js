import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import project from './project';
import projects from './projects';
import activities from './activities';

const rootReducer = combineReducers({
	project,
	projects,
	activities,
	routing
});

export default rootReducer;