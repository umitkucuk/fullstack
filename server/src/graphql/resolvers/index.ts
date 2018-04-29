import UserResolvers from './user-resolvers'

export default {
  Query: {
    me: UserResolvers.me
  },

  Mutation: {
    register: UserResolvers.register,
    login: UserResolvers.login
  }
}