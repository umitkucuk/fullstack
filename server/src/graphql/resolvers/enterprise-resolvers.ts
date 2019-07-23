import Enterprise from '../../models/enterprise'

export default {
  create: async (_, args, { req }) => {
    const enterprise = new Enterprise(args)
    await enterprise.save()

    return enterprise
  },

  getEnterprise: async (root, { id }, ctx) => {
    const { models } = ctx

    let enterprise = await models.Enterprise.findById(id)

    if (!enterprise) {
      return Error('Enterprise not found.')
    }

    return enterprise
  },

  addCostumer: async (_, args, ctx) => {
    let enterprise = await Enterprise.findOne({ name: args.name })

    enterprise.customers.push(args.customerId)

    await enterprise.save()

    return enterprise
  },

  update: async (_, args, ctx) => {
    const { id, description } = args
    const { models } = ctx

    await models.Enterprise.findByIdAndUpdate(id, { $set: { description: description } }, { new: true })
  },
}
