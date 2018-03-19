import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CatsPage extends React.Component {
  render() {
    if (this.props.catsQuery && this.props.catsQuery.loading) {
      return <div>Loading...</div>
    }

    return (
      <React.Fragment>
        <h1>All Cats</h1>
        {this.props.catsQuery.allCats.map((cat) => <li key={cat._id}>{cat.name}</li>)}
      </React.Fragment>
    )
  }
}

const CATS_QUERY = gql`
  query CatsQuery {
    allCats {
      _id
      name
    }
  }
`
export default graphql(CATS_QUERY, {
  name: 'catsQuery'
})(CatsPage)