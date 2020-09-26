import { Schema } from 'mongoose'

/**
 * Mongoose Schema of `diagnostics` collection
 * -------------------------------------------
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const DiagnosticsSchema = new Schema(
  {
    /**
     * Name of Diagnostic (Lab Test)
     *
     * @since 1.0.0
     */
    name: {
      type: String,
      required: true
    },

    /**
     * These are the equipments that are used to
     * perform test.
     *
     * @since 1.0.0
     */
    equipments: {
      type: [
        {
          _id: Schema.Types.ObjectId,
          consumption: {
            type: Number,
            required: true
          }
        }
      ],
      required: true
    },

    /**
     * It is the minimum Time that is required to
     * perform this test
     *
     * It must be stored in (HH:MM:SS) format
     *
     * @example
     * const time1 = '(00:30:00)' // it means 30 minutes.
     * const time2 = '(01:00:00)' // it means 01 hour.
     *
     * @since 1.0.0
     */
    timeRequired: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
