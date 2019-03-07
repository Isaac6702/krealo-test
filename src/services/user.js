const User = require('../models/user')

async function create (params) {
  const user = new User(params)
  const result = await user.save()
  return result
}

module.exports = {
  create
}
