import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const HELLO_QUERY = gql`
  query hello {
    hello
  }
`

const Dashboard: React.FC = () => {
  return (
    <Query query={HELLO_QUERY}>
      {({ loading, data: { hello } }: { loading: boolean; data: any }) => {
        if (loading) return <p>Loading...</p>

        return (
          <>
            <h1>{hello}</h1>
          </>
        )
      }}
    </Query>
  )
}

export default Dashboard
