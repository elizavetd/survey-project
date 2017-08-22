import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as surveyActions from '../actions/userSurveysActions'	
import { api } from '../services/api'

export function* getUserSurveys(action) {
	const surveys = yield call(api.getUserSurveys, action.id)
	yield put(surveyActions.receiveSurveys(surveys))
}

export function* watchGetSurveys() {
	yield takeEvery(surveyActions.GET_USER_SURVEYS, getUserSurveys)
}

export default function* root() {
	yield all([
		//fork(getUserSurveys),
		fork(watchGetSurveys)
	])
}