import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as session from 'express-session'
import * as mongoose from 'mongoose'
(<any>mongoose).Promise = require('bluebird')
import * as mongoSessionStore from 'connect-mongo'
import * as passport from 'passport'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import * as errorhandler from 'errorhandler'

import config from './config/app.config'
import schema from './graphql/schema'

const PORT = config.PORT || 8000

const app = express()

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('Connection succesful to DB!'))
  .catch((err) => console.log(err))

// Error Handler
if (config.NODE_ENV === 'development') {
  app.use(errorhandler())
}

// Cors Middleware
app.use('*',
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

const MongoStore = mongoSessionStore(session)

app.use(
  session({
    name: 'sid',
    secret: config.NODE_ENV === 'production' ? config.SESSION_SECRET : 'secret',
    store: new MongoStore({ 
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60 // 14 days
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 14 * 24 * 60 * 60 * 1000 // 14 days
    }
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session())

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({ schema, context: { req } }))
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => console.log('Server is running on ' + PORT))
