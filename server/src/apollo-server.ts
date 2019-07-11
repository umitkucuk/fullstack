import { ApolloServer } from 'apollo-server-express'
import * as DataLoader from 'dataloader'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'
import models from './models'
import loaders from './loaders'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection, ...rest }: { req: any; connection: any }) => {
    let currentUser = await req.session.user

    return {
      req,
      models,
      user: currentUser,
    }
  },
  playground: {
    settings: {
      'editor.theme': 'dark',
      'request.credentials': 'include',
    },
  },
})

export default server
