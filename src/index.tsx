import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'redux-zero-x'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import routes from './routes'
import store from './store'

const history = createBrowserHistory()


ReactDOM.render(
  <Provider {...store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root'),
)
