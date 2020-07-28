import React from 'react'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './App'
import Login from './pages/user/login'

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
			<Route path="/app" component={App} />
			<Route path="/login" component={Login} />
		</Switch>
	</Router>
)