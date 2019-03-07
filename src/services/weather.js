const weather = require('weather-js')
const History = require('../models/history')

function format (data) {
  return data.reduce((results, data) => {
    const { name, lat, long } = data.location
    const { temperature, date, observationtime } = data.current
    results.push({
      name,
      lat,
      long,
      temperature,
      date,
      observationtime
    })
    return results
  }, [])
}

async function get (country) {
  return new Promise((resolve, reject) => {
    weather.find({ search: country, degreeType: 'F' }, async (err, result) => {
      if (err) {
        return reject(err)
      }
      const weather = format(result)
      const history = new History({ weather })
      await history.save()
      return resolve(weather)
    })
  })
}

function getHistory () {
  return History.find()
}

module.exports = {
  get,
  getHistory
}
