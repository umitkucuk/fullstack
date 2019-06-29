import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'

import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <>
            <GlobalStyle />
            <Navigation />

            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
