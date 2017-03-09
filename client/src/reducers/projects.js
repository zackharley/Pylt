export default function projects(state=[], action) {
	switch(action.type) {
		case 'ADD_PROJECT_TO_LIST':
			return [...state, action.value];
		case 'REMOVE_PROJECT':
			// Find project
			return state;
		default:
			return state;
	}
}