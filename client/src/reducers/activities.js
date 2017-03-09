export default function activities(state=[], action) {
	switch(action.type) {
		case 'ADD_ACTIVITY':
			return [...state, action.value];
		case 'REMOVE_ACTIVITY':
			// Find activity
			return state;
		default:
			return state;
	}
}