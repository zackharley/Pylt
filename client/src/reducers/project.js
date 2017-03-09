export default function project(state = {}, action) {
	switch(action.type) {
		case 'GET_PROJECT':
			return state;
		case 'REMOVE_PROJECT':
			return {};
		default:
			return state;
	}
}