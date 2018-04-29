import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type User {
    id: String!
    email: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    register (email: String!, password: String!): String
    login (email: String!, password: String!): String
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema