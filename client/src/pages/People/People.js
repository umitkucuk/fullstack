import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import Page from '../../components/Page'
import { get } from 'lodash'
import { getUserByIdQuery } from 'graphql/queries/user'

const People = props => {
  const { data, loading, error } = useQuery(getUserByIdQuery, {
    variables: {
      id: props.match.params.id,
    },
  })

  if (loading) {
    return (
      <Page>
        <div>loading...</div>
      </Page>
    )
  }

  if (error) {
    return (
      <Page>
        <div>Error</div>
      </Page>
    )
  }

  return (
    <Page>
      <div>{props.match.params.id}</div>
      {/* <div>{get(data, 'user.email') ? `the user exists` : `the user does not exist`}</div> */}
      <div>{data.user.email}</div>
    </Page>
  )
}

export default People
