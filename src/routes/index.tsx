import React from 'react'
import { Route } from 'react-router-dom'
import App from '../pages/index'
import Home from '../pages/home/App'

const routes = (
  <App>
    <Route path={`/`} component={Home} />
  </App>
)

export default routes
