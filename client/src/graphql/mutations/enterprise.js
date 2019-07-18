import { gql } from 'apollo-boost'

export const updateEnterpriseMutation = gql`
  query updateEnterprise($id: String!, $description: String) {
    updateEnterprise(id: $id, description: $description) {
      id
      name
      description
    }
  }
`
