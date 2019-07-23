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
    costumers: [String]
  }

  type Query {
    me: User
    authHello: String
    hello: String
    user(id: String!): User
    users: [User!]!
    getEnterprise(id: String!): Enterprise
  }

  type Mutation {
    register(email: String!, password: String!): User
    login(email: String!, password: String!): User
    logout: Boolean
    createEnterprise(name: String!, password: String!, description: String): Enterprise
    addCustomer(name: String!, customerId: String!): Enterprise
    updateEnterprise(id: String!, description: String): Enterprise
  }
`

export default typeDefs
