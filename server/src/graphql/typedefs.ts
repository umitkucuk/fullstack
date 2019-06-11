import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    id: String!
    email: String!
  }

  type Enterprise {
    id: String!
    name: String!
    description: String
    costumers: [User]
  }

  type Query {
    me: User
    authHello: String
    hello: String
    users: [User!]!
  }

  type Mutation {
    register(email: String!, password: String!): User
    login(email: String!, password: String!): User
    logout: Boolean
    createEnterprise(name: String!, description: String): Boolean
  }
`

export default typeDefs
