import { gql } from 'apollo-boost'

export const getEnterpriseQuery = gql`
  query getEnterprise($id: String!) {
    getEnterprise(id: $id) {
      id
      name
      description
    }
  }
`
