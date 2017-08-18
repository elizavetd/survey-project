import { RECEIVE_SURVEYS } from '../actions/userSurveysActions'
import { sagaMiddleware } from '../store'
import userSurveysSaga from '../sagas/userSurveysSaga'

export default function surveyReducer(state = {}, action) {
	switch (action.type) {
	case RECEIVE_SURVEYS:
		return Object.assign({}, state, action.surveys);
	default:
		return state;
	};
};

export function getSurveys() {
	sagaMiddleware.run(userSurveysSaga);
}
