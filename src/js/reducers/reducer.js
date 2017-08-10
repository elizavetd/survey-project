import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import userReducer from './userReducer'
import surveyReducer from './surveyReducer'

const reducer = combineReducers({
  user: userReducer,
  surveys: surveyReducer,
  routing: routerReducer,
  form: formReducer
})

export default reducer;