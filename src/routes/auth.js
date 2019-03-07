const express = require('express')

const auth = require('../controllers/auth')

const router = express.Router()

// /**
//  * @swagger
//  * /api/v1/login:
//  *   post:
//  *     tags:
//  *       - Auth
//  *     description: login
//  *     produces:
//  *       - application/json
//  *     security:
//  *       - name: login
//  *         in: body
//  *         required: true
//  *         description: User object
//  *         schema:
//  *          type: object
//  *          properties:
//  *           email:
//  *            type: string
//  *           password:
//  *            type: string
//  *     responses:
//  *      200:
//  *        description: Ok
//  */
router.route('/v1/login').post(auth.login)

module.exports = router
