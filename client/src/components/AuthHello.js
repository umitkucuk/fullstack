import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY = gql`
  query authHello {
    authHello
  }
`

class AuthHello extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ data, error, loading }) => {
          if (error) return 'Something is wrong :('
          if (loading) return 'Loading...'

          return (
            <Fragment>
              <h1>{data.authHello}</h1>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default AuthHello
