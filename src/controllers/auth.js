const passport = require('passport')
const boom = require('boom')
const jwt = require('jsonwebtoken')

const config = require('../config')

// Basic strategy
require('../auth/strategies/basic')

function login (req, res, next) {
  passport.authenticate('basic', function (error, user) {
    try {
      if (error || !user) {
        return next(boom.unauthorized())
      }

      return req.login(user, { session: false }, async function (error) {
        if (error) {
          return next(error)
        }

        const payload = { email: user.email }
        const token = jwt.sign(payload, config.secret.jwt, {
          expiresIn: '15m'
        })

        return res.status(200).json({ access_token: token })
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
}

module.exports = {
  login
}
