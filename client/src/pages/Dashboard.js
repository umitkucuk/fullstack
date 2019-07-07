import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Page from '../components/Page'

const HELLO_QUERY = gql`
  query hello {
    hello
  }
`

const Dashboard = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  if (loading) return 'Loading...'

  if (error) return `Error! ${error.message}`

  return (
    <Page>
      <div>{data.hello}</div>
    </Page>
  )
}

export default Dashboard
