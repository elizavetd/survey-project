import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as surveyActions from '../actions/userSurveysActions'	
import { api } from '../services/api'

export function* getUserSurveys(action) {
	const surveys = yield call(api.getUserSurveys, action.id);
	yield put(surveyActions.receiveSurveys(surveys));
};

export function* getPassedSurveys(action) {
	const surveys = yield call(api.getPassedSurveys, action.id);
	yield put(surveyActions.receivePassedSurveys(surveys));
};

export function* removeSurvey(action) {
	const isRemoved = yield call(api.removeSurvey, action.id);
	if (isRemoved) {
		yield put(surveyActions.removeSurveySuccess());
		yield getUserSurveys(surveyActions.getUserSurveys(action.userId));
	} else {
		yield put(surveyActions.removeSurveyFailure());
	};
};

export function* watchGetSurveys() {
	yield takeEvery(surveyActions.GET_USER_SURVEYS, getUserSurveys);
};

export function* watchGetPassedSurveys() {
	yield takeEvery(surveyActions.GET_USER_PASSED_SURVEYS, getPassedSurveys);
};

export function* watchRequestSurveyRemoval() {
	yield takeEvery(surveyActions.REQUEST_SURVEY_REMOVAL, removeSurvey);
};

export default function* root() {
	yield all([
		//fork(getUserSurveys),
		fork(watchGetSurveys),
		fork(watchGetPassedSurveys),
		fork(watchRequestSurveyRemoval)
	]);
};