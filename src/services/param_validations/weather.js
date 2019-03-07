const Joi = require('joi')

module.exports = {
  get: {
    params: {
      country: Joi.string().required()
    }
  }
}
