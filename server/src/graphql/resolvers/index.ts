import UserResolvers from './user-resolvers'

export default {
  Query: {
    authHello: UserResolvers.authHello
  },

  Mutation: {
    register: UserResolvers.register,
    login: UserResolvers.login
  }
}