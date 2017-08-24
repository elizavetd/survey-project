import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'

import * as templateActions from '../actions/templateActions'
import { api } from '../services/api'

export function* getTemplates() {
	const templates = yield call(api.getTemplates)
	yield put(templateActions.receiveTemplates(templates))
}

export function* removeTemplate(action) {
	const isRemoved = yield call(api.removeTemplate, action.id);
	if (isRemoved) {
		yield put(templateActions.removeTemplateSuccess());
		yield getTemplates();
	} else {
		yield put(templateActions.removeTemplateFailure());
	};
};

export function* watchGetTemplates() {
	yield takeEvery(templateActions.GET_TEMPLATES, getTemplates)
}

export function* watchRequestTemplateRemoval() {
	yield takeEvery(templateActions.REQUEST_TEMPLATE_REMOVAL, removeTemplate);
};

export default function* root() {
	yield all([
		//fork(getTemplates),
		fork(watchGetTemplates),
		fork(watchRequestTemplateRemoval)
	])
}