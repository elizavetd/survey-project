import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducers/reducer'

export const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(logger, sagaMiddleware, routeMiddleware);

export const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);
