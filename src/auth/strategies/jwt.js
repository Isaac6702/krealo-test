const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('boom')
const config = require('../../config')
const User = require('../../models/user')

passport.use(
  new Strategy(
    {
      secretOrKey: config.secret.jwt,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function (tokenPayload, cb) {
      try {
        const user = await User.findOne({ email: tokenPayload.email })

        if (!user) {
          return cb(boom.unauthorized(), false)
        }
        return cb(null, user)
      } catch (error) {
        return cb(error)
      }
    }
  )
)
