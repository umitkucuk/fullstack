import * as mongoose from 'mongoose'
import * as bcrypt from 'bcryptjs'

export interface IEnterprise extends mongoose.Document {
  name: string
  password: string
  description: string
  customers: string[]
  createdAt: Date
  updateAt: Date
  validatePassword(requestPassword: string): boolean
}

const EnterpriseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
)

const hashPassword = (password: string): string => {
  if (!password) return null

  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

EnterpriseSchema.methods.validatePassword = function(requestPassword: string) {
  return bcrypt.compareSync(requestPassword, this.password)
}

EnterpriseSchema.pre('save', async function() {
  const enterprise: any = this

  if (enterprise.isModified('password')) {
    enterprise.password = await hashPassword(enterprise.password)
  }
})

export default mongoose.model<IEnterprise>('Enterprise', EnterpriseSchema)
