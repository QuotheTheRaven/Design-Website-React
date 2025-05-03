import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Resume from './views/resume'
import Sketchbook from './views/sketchbook'
import PropsSecret from './views/props-secret'
import Portfolio from './views/portfolio'
import About from './views/about'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Resume} exact path="/resume" />
        <Route component={Sketchbook} exact path="/sketchbook" />
        <Route component={PropsSecret} exact path="/props-secret" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
