'use strict'
const mongoose = require('mongoose');
const schema = require('../schemas/any.schema')

module.exports = mongoose.model('Any', schema);