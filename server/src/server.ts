import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as session from 'express-session'
import * as mongoose from 'mongoose'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import config from './config/app.config'

import User from './models/user'

import schema from './graphql/schema'

const PORT = config.PORT || 8000

const app = express()

// Connection to MongoDB
mongoose.Promise = global.Promise

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('Connection succesful to DB!'))
  .catch((err) => console.log('err'))

// Cors middleware
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
)

// For express-session
app.use(
  session({
    name: 'qid',
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  })
)

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({ schema, context: { req } }))
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => console.log('Server is running on ' + PORT))
