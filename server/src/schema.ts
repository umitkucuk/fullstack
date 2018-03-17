import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Cat {
    _id: String!
    name: String!
  }

  type Query {
    allCats: [Cat!]!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema