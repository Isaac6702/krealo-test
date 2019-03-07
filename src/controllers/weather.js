const weatherService = require('../services/weather')

async function get (req, res, next) {
  try {
    const { country } = req.params
    const result = await weatherService.get(country)
    return res.json(result)
  } catch (error) {
    next(error)
  }
}

async function history (req, res, next) {
  try {
    const result = await weatherService.getHistory()
    return res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  get,
  history
}
