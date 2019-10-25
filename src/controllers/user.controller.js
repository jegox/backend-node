'use strict'
const model = require('../models/user.model')

module.exports = {
  login: async (data) => {
    return await new Promise((resolve, reject) =>{
      model.findOne({ email: data.email.toLowerCase(), deletedAt: null, contrasena: data.contrasena.toLowerCase() }, null,(err, doc) => {
        if(!err) resolve({ doc })
        else reject(err)
      })
    })
  },
  create: (data) => {
    return new Promise((resolve, reject) => {
      data.password = bcrypt.hashSync(data.password, salt)
      model.create(data, err => {
        if(!err) return resolve('Usuario creado correctamente.')
        return reject(err.message)
      })
    })
  },
  read: async (data) => {
    return await new Promise((resolve, reject) => {
      model.find(data, { password: 0 }, (err, doc) => {
        if(!err) return resolve(doc)
        return reject(err)
      })
    })
  },
  update: async (data) => {
    return new Promise((resolve, reject) => {
      model.findOneAndUpdate(
        { _id: data._id, deletedAt: null }, 
        data,
        { new: false }, 
        err => {
          if(!err) return resolve('Usuario actualizado correctamente.')
          else return reject(err.message)
      })
    })
  },
  destroy: async (_id) => {
    return new Promise((resolve, reject) => {
      model.findOneAndUpdate(
        { _id }, 
        { deletedAt: Date.now() },
        { new: false }, 
        err => {
          if(!err) return resolve('Usuario ha sido eliminado.')
          else return reject(err.message)
      })
    })
  }
}