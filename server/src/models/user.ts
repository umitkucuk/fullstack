import * as mongoose from 'mongoose'
import * as bcrypt from 'bcryptjs'

export interface IUser extends mongoose.Document {
  email: string
  password: string
  comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: { 
    type: String,
    required: true
  },

}, { timestamps: true })

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash
    next()
  })
})

UserSchema.methods.comparePassword = function (candidatePassword: string): Promise<boolean> {
  let password = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, password, (err, success) => {
      if (err) return reject(err)
      return resolve(success)
    })
  })
}

export default mongoose.model<IUser>('User', UserSchema)