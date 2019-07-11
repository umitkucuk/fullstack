import * as mongoose from 'mongoose'
import config from '../config/app.config'

import User from './user'
import Enterprise from './enterprise'

export const connectDB = () => {
  if (config.TEST_DB_URI) {
    return mongoose.connect(config.TEST_DB_URI, { useCreateIndex: true, useNewUrlParser: true })
  }

  if (config.MONGO_URI) {
    return mongoose.connect(config.TEST_DB_URI, { useCreateIndex: true, useNewUrlParser: true })
  }
}

const models = {
  User,
  Enterprise,
}

export default models
