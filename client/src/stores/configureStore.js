import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

// import * as projectActions from '../'

const actionCreators = {
	push
};

const logger = createLogger({
	level: 'info',
	collapsed: true
});

const router = routerMiddleware(hashHistory);

export default function configureStore(initialState = {}) {
	const store = createStore(rootReducer, initialState);
	return store;
}