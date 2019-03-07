const config = {
  app: {
    env: 'dev',
    host: process.env.HOST || 'http://127.0.0.1',
    path: '/api',
    basePath: '/',
    port: 3000
  },
  db: {
    mongo: process.env.MONGO
  },
  secret: {
    jwt: process.env.AUTH_JWT_SECRET
  }
}

module.exports = config
