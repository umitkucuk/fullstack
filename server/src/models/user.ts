import * as mongoose from 'mongoose'
import * as bcrypt from 'bcryptjs'

export interface IUser extends mongoose.Document {
  email: string
  password: string
  createdAt: Date
  updateAt: Date
  validatePassword(requestPassword: string): boolean
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    referralNumber: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
)

function hashPassword(password: string): string {
  if (!password) return null

  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.validatePassword = function(requestPassword: string) {
  return bcrypt.compareSync(requestPassword, this.password)
}

// UserSchema.methods.findMe = async function(userId: string) {
//   let user = await  mongoose.connection.db.collection(name, function (err, collection) {
//     collection.find(query).toArray(cb)
//   })
// }

UserSchema.pre('save', async function() {
  const user: any = this

  if (user.isModified('password')) {
    user.password = await hashPassword(user.password)
  }
})

export default mongoose.model<IUser>('User', UserSchema)
