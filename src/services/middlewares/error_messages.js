const validation = require('express-validation')
const mongoose = require('mongoose')

const { InternalErrorException, BadRequestException, UnauthorizedException } = require('../../helpers/exception')

module.exports = (err, req, res, next) => {
  let message
  if (err instanceof InternalErrorException || err instanceof BadRequestException ||
    err instanceof UnauthorizedException) {
    return next(err)
  }
  if (err instanceof mongoose.Error.ValidationError) {
    message = Object.keys(err.errors).map(key => {
      return err.errors[key].message
    }).join(' and ')
    return next(new BadRequestException(message))
  }
  if (err instanceof validation.ValidationError) {
    message = err.errors.map(error => error.messages.join('. ')).join(' and ')
    return next(new BadRequestException(message))
  }
  return next(new InternalErrorException(err.message))
}
