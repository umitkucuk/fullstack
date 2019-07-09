import * as express from 'express'
import apolloServer from './apollo-server'
import * as helmet from 'helmet'
import * as session from 'express-session'
import * as mongoose from 'mongoose'
;(<any>mongoose).Promise = require('bluebird')
import * as mongoSessionStore from 'connect-mongo'
import * as errorhandler from 'errorhandler'
import * as morgan from 'morgan'

import { corsOptions } from './middlewares/cors'

import config from './config/app.config'

const PORT = config.PORT || 8000

const app = express()

app.use(helmet())
app.use(morgan('dev'))

mongoose
  .connect(config.MONGO_URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log('Connection succesful to DB!'))
  .catch(err => console.log(err))

// Error Handler
if (config.NODE_ENV === 'development') {
  app.use(errorhandler())
}

const MongoStore = mongoSessionStore(session)

app.use(
  session({
    name: 'sid',
    secret: config.NODE_ENV === 'production' ? config.SESSION_SECRET : 'secret',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 14 * 24 * 60 * 60 * 1000,
    },
  }),
)

apolloServer.applyMiddleware({ app, path: '/api', cors: corsOptions })

app.listen(PORT, () => console.log(`🚀  Server ready at http://localhost:${PORT}/api`))
