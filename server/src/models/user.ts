import * as mongoose from 'mongoose'
import * as bcrypt from 'bcryptjs'

export interface IUser extends mongoose.Document {
  email: string
  password: string
  createdAt: Date
  updateAt: Date
  validatePassword(requestPassword): boolean
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



function hashPassword(password: string): string {
  if (!password) return null

  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.validatePassword = function (requestPassword: string) {
  return bcrypt.compareSync(requestPassword, this.password)
}

UserSchema.pre('save', function (next) {
  const user: any = this

  if (!user.isModified('password')) {
    return next()
  }

  user.password = hashPassword(user.password)
  return next()
})

export default mongoose.model<IUser>('User', UserSchema)