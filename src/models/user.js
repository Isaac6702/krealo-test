const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - name
 *       - email
 *       - password
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  },
  password: {
    type: String,
    required: true,
    set: (pass) => {
      return bcrypt.hashSync(pass, 10)
    }
  }
},
  {
    collection: 'user',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

module.exports = mongoose.model('User', UserSchema)
