import { fork } from 'redux-saga/effects'

import userSaga from './userSaga'
import userSurveysSaga from './userSurveysSaga'
import templateSaga from './templateSaga'
import questionSaga from './questionSaga'
import jobSaga from './jobSaga'

export default function* root() {
	yield [
		fork(userSaga),
		fork(userSurveysSaga),
		fork(templateSaga),
		fork(questionSaga),
		fork(jobSaga)
	]
};
