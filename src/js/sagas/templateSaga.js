import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'

import * as templateActions from '../actions/templateActions'
import { api } from '../services/api'

export function* getTemplates() {
	const templates = yield call(api.getTemplates)
	yield put(templateActions.receiveTemplates(templates))
}

export function* watchGetTemplates() {
	yield takeEvery(templateActions.GET_TEMPLATES, getTemplates)
}

export default function* root() {
	yield all([
		fork(getTemplates),
		fork(watchGetTemplates)
	])
}