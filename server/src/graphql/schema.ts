import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type User {
    id: String!
    email: String!
  }

  type Query {
    me: User
    authHello: String
  }

  type Mutation {
    register (email: String!, password: String!): Boolean
    login (email: String!, password: String!): Boolean
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema