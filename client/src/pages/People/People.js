import React from 'react'
import Page from '../../components/Page'

const People = props => {
  return (
    <Page>
      <div>{props.match.params.id}</div>
    </Page>
  )
}

export default People
