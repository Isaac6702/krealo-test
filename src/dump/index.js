const Mongoose = require('mongoose')
const Promise = require('bluebird')

const config = require('../config')

const User = require('../models/user')

const userData = require('./data/user')

Mongoose.Promise = Promise

async function loadData () {
  try {
    console.log(`Running seeds`)
    await User.remove({})
    await User.create(userData)

    Mongoose.connection.close()
    console.log(`The process finished`)
    process.exit()
  } catch (err) {
    console.log(`error: `, err)
  }
}

Mongoose.connect(config.db.mongo, { useMongoClient: true })
const mongo = Mongoose.connection

mongo
  .on('error', console.log)
  .once('open', loadData)
