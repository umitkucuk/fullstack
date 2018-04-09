import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  scalar Date

  type User {
    _id: String!
    email: String!
    password: String!
    created_at: Date!
    updated_at: Date!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    register(email: String!, password: String!): User
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema