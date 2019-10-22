'use strict'
const db = require('./src/config/mongo.db')
const express = require('./src/config/express')

db.then(
  () => {
    console.log('Running Mongo Database')
    express.listen(3000, () => console.log('Running express'))
  },
  error => console.warn(error)
)
.catch(err => console.log(err));