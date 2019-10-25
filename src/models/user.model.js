'use strict'
const mongoose = require('mongoose');
const schema = require('../schemas/user.schema')

module.exports = mongoose.model('User', schema);