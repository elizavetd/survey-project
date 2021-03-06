import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import userReducer from './userReducer'
import surveyReducer from './surveyReducer'
import templateReducer from './templateReducer'
import jobReducer from './jobReducer'
import questionReducer from './questionReducer'

const reducer = combineReducers({
	user: userReducer,
	surveys: surveyReducer,
	template: templateReducer,
	currentSurvey: questionReducer,
	jobList: jobReducer,
	routing: routerReducer,
	form: formReducer
})

export default reducer;