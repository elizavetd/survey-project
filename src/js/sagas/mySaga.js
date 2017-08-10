import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions/userSurveysActions'
//import { getCart } from '../reducers'
import { api } from '../services/api'

export function* getUserSurveys() {
  const surveys = yield call(api.getUserSurveys)
  yield put(actions.receiveSurveys(surveys))
}

export function* watchGetSurveys() {
  /*
    takeEvery will fork a new `checkout` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_USER_SURVEYS, getUserSurveys)
}

export default function* root() {
  yield all([
    fork(getUserSurveys),
    fork(watchGetSurveys)
  ])
}