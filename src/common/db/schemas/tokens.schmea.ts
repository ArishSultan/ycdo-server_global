import { Schema } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const TokensSchema = new Schema(
  {
    /**
     * @since 1.0.0
     */
    number: {
      type: String,
      required: true
    },

    /**
     * @values poor, general, ycdo
     * @since 1.0.0
     */
    type: {
      type: String,
      required: true
    },

    /**
     * @since 1.0.0
     */
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'patients',
      required: true
    },

    /**
     * @since 1.0.0
     */
    medicines: {
      type: [
        {
          medicine: Schema.Types.ObjectId,

          /**
           * @values od, bd, td
           */
          consumption: String
        }
      ],
      default: []
    },

    /**
     * @since 1.0.0
     */
    diagnostics: {
      type: [
        {
          diagnostic: Schema.Types.ObjectId,
          /**
           * Result of the Lab Test i.e. +ive or -ive
           */
          result: String
        }
      ],
      default: []
    },

    /**
     * @since 1.0.0
     */
    createdAt: {
      type: Date,
      default: Date.now()
    },

    /**
     * @values running, pending, testing, done
     */
    state: {
      type: String,
      default: 'running'
    },

    transaction: {
      type: [Schema.Types.ObjectId],
      ref: 'transactions',
      required: true
    },

    /**
     * @since 1.0.0
     */
    checkedBy: {
      type: Schema.Types.ObjectId,
      ref: 'doctors',
      default: null
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },

    branch: {
      type: Schema.Types.ObjectId,
      ref: 'branches',
      required: true
    }
  },
  { timestamps: true }
)
