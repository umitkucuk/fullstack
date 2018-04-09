import * as bcrypt from 'bcryptjs'
import User from '../../models/user'

const SALT = 12

export default {
  register: async (_, args, { req }) => {
    const password = await bcrypt.hash(args.password, SALT)
    let user = new User({
      email: args.email,
      password
    })

    return user.save()
  },

  allUsers: async (parent, args, { req }) => {
    const users = await User.find()
    return users.map((user) => {
      user._id = user._id.toString()
      return user
    })
  }
}