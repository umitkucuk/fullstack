import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import AuthHello from './AuthHello'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth-hello" component={AuthHello} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
