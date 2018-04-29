import * as mongoose from 'mongoose'
import config from './app.config'

mongoose.Promise = global.Promise

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('Connection succesful to DB'))
  .catch((err) => console.log('err'))

export default mongoose