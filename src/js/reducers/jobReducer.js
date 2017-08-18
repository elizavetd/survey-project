import { RECEIVE_JOBS } from '../actions/jobActions'
import { store, sagaMiddleware } from '../store'
import jobSaga from '../sagas/jobSaga'

export default function userReducer(state = [], action) {
	switch (action.type) {
	case RECEIVE_JOBS:
		return state.concat(action.payload);
	default:
		return state;
	};
};

export function getJobList() {
	sagaMiddleware.run(jobSaga);
}