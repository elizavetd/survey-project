import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store, sagaMiddleware } from './store'
import Layout from './components/Layout'

import rootSaga from './sagas/rootSaga'

sagaMiddleware.run(rootSaga)

const app = document.getElementById('app');

ReactDOM.render( <Provider store={store}>
	<Layout/>
</Provider>, app);
