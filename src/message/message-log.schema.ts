import { Schema } from 'mongoose'

export const MessageLogSchema = new Schema(
  {
    message: String
  },
  {
    timestamps: true
  }
)
