'use strict'
const glob = require('glob')
const path = require('path')

module.exports = function(router, io){
  glob.sync('./src/routes/*.js')
    .forEach(file => {
      if(!file.includes('index.js')){
        require(path.resolve(file))(router, io)
      }
    })
}