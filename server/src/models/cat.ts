import * as mongoose from 'mongoose'

const CatSchema = new mongoose.Schema({
  name: String
})

export default mongoose.model('Cat', CatSchema)
