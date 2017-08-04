import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'

import Layout from './components/Layout'
import store from './store'

const history = syncHistoryWithStore(createBrowserHistory(), store);

const app = document.getElementById('app');

ReactDOM.render( <Provider store={store}>
  <Layout history = {history}/>
</Provider>, app);
