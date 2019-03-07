const Joi = require('joi')

module.exports = {
  auth: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }
}
