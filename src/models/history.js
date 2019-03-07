const mongoose = require('mongoose')

const Schema = mongoose.Schema

/**
 * @swagger
 * definitions:
 *   History:
 *     type: object
 *     properties:
 *       weathers:
 *         type: string
 */
const HistorySchema = new Schema({
  weather: [{
    name: {
      type: String
    },
    lat: {
      type: String
    },
    long: {
      type: String
    },
    temperature: {
      type: String
    },
    date: {
      type: String
    }
  }]
},
  {
    collection: 'history',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

module.exports = mongoose.model('History', HistorySchema)
