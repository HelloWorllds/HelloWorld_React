import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Admin from './components/Admin'
import Home from './components/Home'
import Genre from './components/Genre'
import NotFound from './components/NotFound'
import List from './components/List'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='admin' component={Admin} />
			<Route path='genre/:genre' component={Genre} />
			<Route path='list' component={List} />
		</Route>
		<Route path='*' component={NotFound} />
	</Router>,
	document.getElementById('root')
) 