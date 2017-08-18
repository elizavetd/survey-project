import { take, put, call, fork, select, takeLatest, takeEvery, all } from 'redux-saga/effects'
import * as userActions from '../actions/userActions'

import { api } from '../services/api'

export function* getCurrentUser() {
	const user = yield call(api.getCurrentUser)
	yield put(userActions.receiveCurrentUser(user))
}

export function* getUserList() {
	const users = yield call(api.getUserList)
	yield put(userActions.receiveUserList(users))
}

export function* watchGetCurrentUser() {
	yield takeLatest(userActions.GET_CURRENT_USER, getCurrentUser)
}

export function* watchGetUserList() {	
	yield takeEvery(userActions.GET_USER_LIST, getUserList)
}

export default function* root() {
	yield all([
		fork(getCurrentUser),
		fork(watchGetCurrentUser)
	])
}

export function* userList() {
	yield all([
		fork(getUserList),
		fork(watchGetUserList)
	])
}
