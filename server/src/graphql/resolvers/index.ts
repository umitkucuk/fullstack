import UserResolvers from './user-resolvers'

export default {
  Query: {
    me: UserResolvers.me,
    authHello: UserResolvers.authHello
  },

  Mutation: {
    register: UserResolvers.register,
    //login: UserResolvers.login
  }
}