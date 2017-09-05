import { RECEIVE_SURVEYS, RECEIVE_PASSED_SURVEYS } from '../actions/userSurveysActions'
import { sagaMiddleware } from '../store'

export default function surveyReducer(state = {}, action) {
	switch (action.type) {
	case RECEIVE_SURVEYS:
	case RECEIVE_PASSED_SURVEYS:
		return Object.assign({}, state, action.surveys);
	default:
		return state;
	};
};
