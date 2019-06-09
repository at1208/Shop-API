module.exports = (app) => {
  const bodyParser = require('body-parser')
  const morgan = require('morgan')
  app.use(bodyParser.json())
  app.use(morgan('combined'))
  app.use(bodyParser.urlencoded({ extended: true }))
}
