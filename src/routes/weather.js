const express = require('express')
const validate = require('express-validation')

const weather = require('../controllers/weather')
const passport = require('passport')

const router = express.Router()

const weatherValidator = require('../services/param_validations/weather')

// JWT strategy
require('../auth/strategies/jwt')

/**
 * @swagger
 * /api/v1/weather/{country}:
 *   get:
 *     tags:
 *       - Weather
 *     description: weather
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         type: string
 *         description: "Token necesario para la autenticación. Ejemplo: Bearer [token]"
  *       - name: country
 *         description: Country
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: Ok
 */
router.route('/v1/weather/:country').get(passport.authenticate('jwt', { session: false }), validate(weatherValidator.get), weather.get)

/**
 * @swagger
 * /api/v1/histories:
 *   get:
 *     tags:
 *       - Weather
 *     description: weather
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         type: string
 *         description: "Token necesario para la autenticación. Ejemplo: Bearer [token]"
 *     responses:
 *      200:
 *        description: Ok
 */
router.route('/v1/histories').get(passport.authenticate('jwt', { session: false }), weather.history)

module.exports = router
