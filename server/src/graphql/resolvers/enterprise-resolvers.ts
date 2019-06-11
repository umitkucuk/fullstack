import Enterprise from '../../models/enterprise'

export default {
  create: async (_, args, { req }) => {
    const enterprise = new Enterprise(args)
    await enterprise.save()

    return true
  }
}