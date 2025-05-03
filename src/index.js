import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Props from './pages/props'
import About from './pages/about'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Sketchbook from './pages/sketchbook'
import NotFound from './pages/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Props} exact path="/props" />
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Resume} exact path="/resume" />
        <Route component={Sketchbook} exact path="/sketchbook" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
