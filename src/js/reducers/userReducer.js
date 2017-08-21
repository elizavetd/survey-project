import { RECEIVE_CURRENT_USER, RECEIVE_USER_LIST } from '../actions/userActions'
import { store, sagaMiddleware } from '../store'

const initialState = {
	currentUser: {
		role: 'guest'
	}
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
	case RECEIVE_CURRENT_USER:
		return Object.assign({}, state, {currentUser: action.user});
	case RECEIVE_USER_LIST:
		return Object.assign({}, state, action.userList);
	default:
		return state;
	};
};
