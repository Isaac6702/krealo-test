const Mongoose = require('mongoose')
const Promise = require('bluebird')

const config = require('./config')
const app = require('./config/express')

Mongoose.Promise = Promise

function listen () {
  const { port, env, path, host } = config.app
  app.listen(config.app.port, () => {
    console.log(`Environment: ${env}`)
    console.log(`Express server listening on port ${port}`)
    console.log(`swagger: ${host}:${port}${path}/docs`)
  })
}

Mongoose.connect(config.db.mongo, { useMongoClient: true })
const mongo = Mongoose.connection

mongo
  .on('error', console.log)
  .once('open', listen)

module.exports = {
  app
}
