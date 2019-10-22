'use strict'
const mongoose = require('mongoose')

const url = 'mongodb+srv://rooter:Rooter123@cluster0-shotf.mongodb.net/test?retryWrites=true&w=majority'
const options = { 
  useNewUrlParser: true ,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}

module.exports =  mongoose.connect(url, options)