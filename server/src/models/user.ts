import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { 
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)