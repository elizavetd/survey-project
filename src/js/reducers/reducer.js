import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import myReducer from './my-reducer'

const reducer = combineReducers({
  myReducer: myReducer,
  form: formReducer
})

export default reducer;