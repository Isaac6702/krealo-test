const express = require('express')
const validate = require('express-validation')

const user = require('../controllers/user')
const UserValidator = require('../services/param_validations/user')

const router = express.Router()

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     tags:
 *       - User
 *     description: Register users
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: user
 *        in: body
 *        required: true
 *        description: User object
 *        schema:
 *          $ref: '#/definitions/User'
 *     responses:
 *      200:
 *        description: Ok
 */
router.route('/v1/users').post(validate(UserValidator.create), user.create)

module.exports = router
