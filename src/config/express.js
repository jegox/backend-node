'use strict'
const express = require("express")
const bodyParser = require('body-parser')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const router = express.Router()

app.disable('x-powered-by') 
app.use(morgan('dev'))
app.use(compression())
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', router)

require('../routes')(router)
module.exports = app