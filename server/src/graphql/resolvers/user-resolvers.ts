import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import User from '../../models/user'
import config from '../../config/app.config'

export default {
  register: async (_, args, req) => {
    const user = new User(args)
    await user.save()

    return jwt.sign(
      { id: user._id, email: user.email },
      config.JWT_SECRET,
      { expiresIn: '1y' }
    )
  },

  login: async (_, { email, password }, req) => {
    const user = await User.findOne({ 'email': email })

    if (!user) {
      throw new Error('Incorrect email or password')
    }

    const valid = await user.comparePassword(password)

    if (!valid) {
      throw new Error('Incorrect email or password')
    }

    return jwt.sign(
      { id: user._id, email: user.email },
      config.JWT_SECRET,
      { expiresIn: '1d' }
    )
  },

  me: async (_, args, { user }) => {
    if (!user) {
      throw new Error('You are not authenticated!')
    }

    return await User.findById(user._id)
  }
}