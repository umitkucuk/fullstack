import * as Joi from '@hapi/joi'
import User from '../../models/user'
import * as Auth from '../../authentication'
import { Register } from '../../schemas'

export default {
  register: async (_, args, { req }) => {
    const user = new User(args)

    await Joi.validate(args, Register, { abortEarly: false })

    await user.save()

    req.session.userId = user._id

    return true
  },

  login: async (_, args, { req }) => {
    const user = await User.findOne({ email: args.email })

    if (!user) {
      throw new Error('Incorrect email or password')
    }

    const valid = await user.validatePassword(args.password)

    if (!valid) {
      throw new Error('Incorrect email or password')
    }

    req.session.userId = user.id

    return user
  },

  logout: async (_, args, { req, res }) => {
    Auth.checkSignedIn(req)

    return Auth.signOut(req, res)
  },

  authHello: async (_, __, { req }) => {
    if (req.session.userId) {
      return `Cookie found! Your id is: ${req.session.userId}`
    } else {
      return 'Could not find cookie :('
    }
  },

  me: async (_, __, { req }) => {
    if (req.session.userId) {
      const user = await User.findOne({ _id: req.session.userId })
      return user
    } else {
      return Error('You are not login.')
    }
  },

  hello: async (_, __, { req }) => {
    return 'Hello from Grahpql'
  },

  users: async (root, args, { req }, info) => {
    let users = await User.find({})

    return users
  },
}
