import UserResolvers from './user-resolvers'
import EnterpriseResolvers from './enterprise-resolvers'

export default {
  Query: {
    authHello: UserResolvers.authHello,
    me: UserResolvers.me,
    hello: UserResolvers.hello,
    user: UserResolvers.getUserById,
    users: UserResolvers.users,
    getEnterprise: EnterpriseResolvers.getEnterprise,
  },

  Mutation: {
    register: UserResolvers.register,
    login: UserResolvers.login,
    logout: UserResolvers.logout,
    createEnterprise: EnterpriseResolvers.create,
    addCustomer: EnterpriseResolvers.addCostumer,
    updateEnterprise: EnterpriseResolvers.update,
  },
}
