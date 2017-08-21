import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as surveyActions from '../actions/userSurveysActions'	
import { api } from '../services/api'

export function* getUserSurveys() {
	const surveys = yield call(api.getUserSurveys)
	yield put(surveyActions.receiveSurveys(surveys))
}

export function* watchGetSurveys() {
	yield takeEvery(surveyActions.GET_USER_SURVEYS, getUserSurveys)
}

export default function* root() {
	console.log('survey saga')
	yield all([
		//fork(getUserSurveys),
		fork(watchGetSurveys)
	])
}