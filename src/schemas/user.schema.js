'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: [true, 'Campo \'nombre\' es requerido']
    },
    apellido: {
      type: String,
      trim: true,
      required: [true, 'Campo \'apellido\' es requerido']
    },
    contrasena: {
      type: String,
      required: [true, 'Campo \'contraseña\' es requerido']
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Campo \'correo electronico\' es requerido']
    },
    createAt: {
      type: Date
    },
    updateAt: {
      type: Date
    },
    deletedAt: {
      type: Date
    }
  },
  {
    timestamps: true,
    versionKey: false
  });

module.exports = schema