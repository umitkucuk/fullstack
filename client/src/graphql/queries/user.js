import { gql } from 'apollo-boost'

export const getUserByIdQuery = gql`
  query getUserById($id: String!) {
    user(id: $id) {
      email
    }
  }
`
