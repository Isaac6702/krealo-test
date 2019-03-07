const userService = require('../services/user')

async function create (req, res, next) {
  try {
    const { body } = req
    const { _id: id } = await userService.create(body)
    return res.json({ id })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
