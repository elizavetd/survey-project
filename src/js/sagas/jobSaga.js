import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'

import * as jobActions from '../actions/jobActions'
import { api } from '../services/api'

export function* getJobs() {
	const jobs = yield call(api.getJobs)
	yield put(jobActions.receiveJobs(jobs))
}

export function* watchGetJobs() {
	yield takeEvery(jobActions.GET_JOBS, getJobs)
}

export default function* root() {
	yield all([
		fork(getJobs),
		fork(watchGetJobs)
	])
}