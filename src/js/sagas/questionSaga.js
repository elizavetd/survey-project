import { take, put, call, fork, select, takeLatest, takeEvery, all } from 'redux-saga/effects'
import * as questionActions from '../actions/questionActions'

import { api } from '../services/api'

export function* saveSurvey(action) {
	const isSaved = yield call(api.saveNewSurvey, action.survey);
	if (isSaved) {
		yield put(questionActions.surveySavingSuccess());
		yield alert('survey saved');
	} else {
		yield put(questionActions.surveySavingFailure());
	}
}

export function* watchRequestSurveySaving() {
	yield takeEvery(questionActions.REQUEST_SURVEY_SAVING, saveSurvey)
}

export default function* root() {
	yield all([
		//fork(getQuestionList),
		fork(watchRequestSurveySaving)
	])
}
