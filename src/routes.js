import React from 'react'
import { Router, IndexRoute, browserHistory } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from 'components/App'
import { HomePage, LogIn } from 'containers'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LogIn} />
    </Switch>
  </BrowserRouter>
)

export default routes
