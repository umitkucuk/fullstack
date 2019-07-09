import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
  }),
  playground: {
    settings: {
      'editor.theme': 'dark',
      'request.credentials': 'include',
    },
  },
})

export default server
