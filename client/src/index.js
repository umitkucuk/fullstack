import React from 'react'
import ReactDOM from 'react-dom'
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import registerServiceWorker from './registerServiceWorker'

import HomePage from './components/HomePage'
import CatsPage from './components/CatsPage'

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <React.Fragment>
        <Link to='/'>Home</Link>
        <Link to='/cats'>Cats</Link>
        <hr />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cats' component={CatsPage} />
        </Switch>
      </React.Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)

registerServiceWorker()
