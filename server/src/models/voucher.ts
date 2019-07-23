import * as mongoose from 'mongoose'

export interface IVoucher extends mongoose.Document {
  value: string
  description: string
  createdAt: Date
  updateAt: Date
}

const VoucherSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
)

export default mongoose.model<IVoucher>('Voucher', VoucherSchema)
