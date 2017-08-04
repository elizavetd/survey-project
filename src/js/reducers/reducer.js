import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import myReducer from './my-reducer'

const reducer = combineReducers({
  myReducer: myReducer,
  routing: routerReducer,
  form: formReducer
})

export default reducer;