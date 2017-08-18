import { RECEIVE_TEMPLATES } from '../actions/templateActions'
import { sagaMiddleware } from '../store'
import templateSaga from '../sagas/templateSaga'

export default function templateReducer(state = {}, action) {
	switch (action.type) {
	case RECEIVE_TEMPLATES:
		return Object.assign({}, state, action.templates);
	default:
		return state;
	};
};

export function getTemplates() {
	sagaMiddleware.run(templateSaga);
}
