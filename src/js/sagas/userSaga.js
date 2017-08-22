import { take, put, call, fork, takeEvery, all } from 'redux-saga/effects'
import * as userActions from '../actions/userActions'
import { SET_SUBMIT_SUCCEEDED as setSubmitSucceeded } from 'redux-form/es/actionTypes'

import { api } from '../services/api'

export function* getCurrentUser() {
	const user = yield call(api.getCurrentUser);
	yield put(userActions.receiveCurrentUser(user));
}

export function* getUserList() {
	const users = yield call(api.getUserList);
	yield put(userActions.receiveUserList(users));
}

export function* logout() {
	yield put(userActions.receiveCurrentUser({role: 'guest'}));
}

export function* watchGetCurrentUser() {
	yield takeEvery(userActions.GET_CURRENT_USER, getCurrentUser);
}

export function* watchGetUserList() {	
	yield takeEvery(userActions.GET_USER_LIST, getUserList);
}

export function* watchRequestLogin() {
	yield takeEvery(setSubmitSucceeded, getCurrentUser);
}

export function* watchLogout() {
	yield takeEvery(userActions.LOGOUT, logout)
}

export default function* root() {
	yield all([
		fork(getCurrentUser),
		fork(watchGetCurrentUser),
		fork(watchRequestLogin),
		fork(watchGetUserList),
		fork(watchLogout)
	]);
};
