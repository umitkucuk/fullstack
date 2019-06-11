import UserResolvers from './user-resolvers'
import EnterpriseResolvers from './enterprise-resolvers'

export default {
  Query: {
    authHello: UserResolvers.authHello,
    me: UserResolvers.me,
    hello: UserResolvers.hello,
    users: UserResolvers.users
  },

  Mutation: {
    register: UserResolvers.register,
    login: UserResolvers.login,
    logout: UserResolvers.logout,
    createEnterprise: EnterpriseResolvers.create
  }
}