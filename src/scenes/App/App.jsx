import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import { auth } from 'services'

import Auth, { AccessToken } from 'scenes/Auth'
import Home from 'scenes/Home'
import Question from 'scenes/Question'
import NotFound from 'scenes/NotFound'

import PrivateRoute from 'components/PrivateRoute'

import Navbar from './components/Navbar'

import 'styles'

class App extends Component {
  state = { user: null }

  checkUserLoaded () {
    const user = this.state.user

    if (auth.isAuthenticated() && !user) {
      auth
        .getProfile()
        .then(profile => {
          this.setState({ user: profile })
        })
        .catch(err => alert(err))
    }
  }

  componentDidMount () {
    this.checkUserLoaded()
  }

  componentDidUpdate () {
    this.checkUserLoaded()
  }

  render () {
    return (
      <div className="app theme">
        <Helmet>
          <title>FAQ</title>
        </Helmet>
        <Navbar user={this.state.user} />
        <div className="main">
          <Switch>
            {/* HOME */}
            <PrivateRoute exact path="/" component={Home} />
            {/* AUTH */}
            <Route path="/auth" component={Auth} />
            <Route path="/access_token=:rest" component={AccessToken} />
            <Route path="/error=:rest" component={AccessToken} error={true} />
            {/* QUESTIONS */}
            <PrivateRoute path="/q" component={Question} />
            {/* 404 */}
            <PrivateRoute component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
