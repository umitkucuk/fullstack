import * as mongoose from 'mongoose'

export interface IEnterprise extends mongoose.Document {
  name: string
  description: string,
  createdAt: Date
  updateAt: Date
}

const EnterpriseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
  }
}, { timestamps: true })


export default mongoose.model<IEnterprise>('Enterprise', EnterpriseSchema)
