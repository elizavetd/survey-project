import { take, put, call, fork, select, takeLatest, takeEvery, all } from 'redux-saga/effects'
import * as questionActions from '../actions/questionActions'

import { api } from '../services/api'

export function* getQuestionList() {
	const questions = yield call(api.getQuestionList)
	yield put(questionActions.receiveQuestionList(questions))
}

export function* watchGetQuestionList() {
	yield takeEvery(questionActions.GET_SURVEY_QUESTIONS, getQuestionList)
}

export default function* root() {
	yield all([
		//fork(getQuestionList),
		fork(watchGetQuestionList)
	])
}
