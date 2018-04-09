import UserResolvers from './user-resolvers'

export default {
  Query: {
    allUsers: UserResolvers.allUsers
  },

  Mutation: {
    register: UserResolvers.register,
  }
}