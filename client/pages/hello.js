import React, { Component, Fragment } from 'react'
import { Query, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY = gql`
  query me {
    me {
      email
    }
  }
`

const HELLO = gql`
  query hello {
    hello
  }
`

class Hello extends Component {
  render() {
    return (
      <Query query={HELLO}>
        {({ data, error, loading }) => {
          if (error) return 'Hatalı'
          if (loading) return 'Loading...'

          return (
            <Fragment>
              <h1>{data.hello}</h1>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default withApollo(Hello)
