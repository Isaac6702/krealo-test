const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerTools = require('swagger-tools')
const path = require('path')

const errorMessages = require('../services/middlewares/error_messages')
const errorResponse = require('../services/middlewares/error_response')
const config = require('./index')
const routes = require('../routes')

const app = express()

app.disable('x-powered-by')
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({
  extended: true
}))

if (config.app.env === 'dev' || config.app.env === 'qa') {
  app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(cors())

// future add swagger and api error
app.use(config.app.path, routes)

app.use(errorMessages)

app.use(errorResponse)

app.locals.config = config

const options = {
  swaggerDefinition: {
    info: {
      title: 'backend',
      version: '1.0.0'
    }
  },
  apis: [
    `${path.resolve()}/src/routes/*.js`,
    `${path.resolve()}/src/models/*.js`
  ]
}

const swaggerSpec = swaggerJSDoc(options)

swaggerTools.initializeMiddleware(swaggerSpec, (middleware) => {
  app.use(middleware.swaggerUi({
    apiDocs: `${config.app.path}/docs.json`,
    swaggerUi: `${config.app.path}/docs`,
    apiDocsPrefix: config.app.basePath,
    swaggerUiPrefix: config.app.basePath
  }))
})

module.exports = app
