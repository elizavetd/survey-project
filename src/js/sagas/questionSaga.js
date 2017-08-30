import { take, put, call, fork, select, takeLatest, takeEvery, all } from 'redux-saga/effects'
import * as questionActions from '../actions/questionActions'

import { api } from '../services/api'

export function* saveSurvey(action) {
	const isSaved = yield call(api.saveNewSurvey, action.survey);
	if (isSaved) {
		yield put(questionActions.surveySavingSuccess());
		yield alert('Опрос сохранён');
	} else {
		yield put(questionActions.surveySavingFailure());
	};
};

export function* saveTemplate(action) {
	const isSaved = yield call(api.saveNewTemplate, action.template);
	if (isSaved === true) {
		yield put(questionActions.templateSavingSuccess());
		yield alert('Шаблон сохранён');
	} else {
		yield put(questionActions.templateSavingFailure());
	};
};

export function* addAnswer(action) {
	const isSaved = yield call(api.addAnswer, action.surveyId, action.answer);
	if (isSaved) {
		yield put(questionActions.addAnswerSuccess());
		yield console.log('Результат пользователя сохранен');
	} else {
		yield put(questionActions.addAnswerFailure());
	}
}

export function* watchRequestSurveySaving() {
	yield takeEvery(questionActions.REQUEST_SURVEY_SAVING, saveSurvey);
};

export function* watchRequestTemplateSaving() {
	yield takeEvery(questionActions.REQUEST_TEMPLATE_SAVING, saveTemplate);
};

export function* watchAddAnswer() {
	yield takeEvery(questionActions.ADD_ANSWER, addAnswer)
}

export default function* root() {
	yield all([
		//fork(getQuestionList),
		fork(watchRequestSurveySaving),
		fork(watchRequestTemplateSaving),
		fork(watchAddAnswer)
	]);
};
