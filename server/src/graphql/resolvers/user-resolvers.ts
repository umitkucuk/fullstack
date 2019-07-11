import * as Joi from '@hapi/joi'
import User from '../../models/user'
import * as Auth from '../../authentication'
import { Register } from '../../schemas'
import { authedResolver } from '../../utils/authentication'

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
    req.session.user = user

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

  hello: authedResolver(async (_, __, context) => {
    const { user, req } = context

    return `Hello from Grahpql and your user email is: ${user.email}`
  }),

  getUserById: async (root, { id }, { req }) => {
    let user = await User.findById(id)

    if (!user) {
      return Error('User not found.')
    }

    return user
  },

  users: async (root, args, { models }) => {
    return await models.User.find()
  },
}
