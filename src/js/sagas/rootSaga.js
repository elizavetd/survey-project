import { take, put, call, fork, select, takeLatest, takeEvery, all } from 'redux-saga/effects'

import userSaga from './userSaga'
import userSurveySaga from './userSaga'
import templateSaga from './templateSaga'
import questionSaga from './questionSaga'
import jobSaga from './jobSaga'

import * as surveyActions from '../actions/userSurveysActions'	
import { api } from '../services/api'

export function* getUserSurveys() {
	const surveys = yield call(api.getUserSurveys)
	yield put(surveyActions.receiveSurveys(surveys))
}

export function* watchGetSurveys() {
	/*
		takeEvery will fork a new `checkout` task on each GET_ALL_PRODUCTS actions
		i.e. concurrent GET_ALL_PRODUCTS actions are allowed
	*/
	yield takeEvery(surveyActions.GET_USER_SURVEYS, getUserSurveys)
}

export default function* root() {
	console.log('root saga');
	yield [
		//fork(userSaga),
		fork(watchGetSurveys),
		fork(templateSaga),
		fork(questionSaga),
		fork(jobSaga)
	]
};
