const Joi = require('joi')

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }
}
