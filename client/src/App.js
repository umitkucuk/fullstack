import React from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo-hooks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'

import AuthRoute from './components/AuthRoute'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import People from './pages/People'
import Account from './pages/Account'
import Login from './pages/Login'
import Register from './pages/Register'

const client = new ApolloClient({
  uri: 'http://localhost:8000/api',
  cache: new InMemoryCache(),
  credentials: 'include',
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <GlobalStyle />
          <Navigation />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/people/:id" component={People} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  )
}

export default App
