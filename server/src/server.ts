import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { graphqlExpress, graphiqlExpress  } from 'apollo-server-express'

import db from './config/db.config'
import config from './config/app.config'

import Cat from './models/cat'

import schema from './schema'

const PORT = config.PORT || 5000

const app = express()

db.connection.on('error', () => {
  throw new Error('Unable to connect to database')
})

app.use('/graphql', bodyParser.json(), cors(), graphqlExpress({ schema, context: { Cat } }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => console.log('Server is running on ' + PORT))
