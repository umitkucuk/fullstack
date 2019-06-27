import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <NavLink activeClassName="active" exact to="/">
            Dashboard
          </NavLink>
          <NavLink activeClassName="active" exact to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="active" exact to="/register">
            Register
          </NavLink>

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </>
      </Router>
    </ApolloProvider>
  )
}

export default App
