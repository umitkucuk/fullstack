import * as mongoose from 'mongoose'
import config from './app.config'

mongoose.Promise = global.Promise

mongoose.connect(config.MONGO_URI)

if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    console.info(`${collectionName}.${method}`, doc)
  })
}

mongoose.connection.on('connected', () => {
  console.info('Database connection successful!')
})

export default mongoose