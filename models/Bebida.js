const mongoose = require('mongoose');

const BebidaSchema = new mongoose.Schema({
    numBebida: {
      type: Number,
      required: true
    },
    nombreBebida: {
        type: String,
        required: true
    },
    tipoBebida: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }, 
    descripcion: {
        type: String,
        required: true
    },
  });

module.exports = mongoose.model('Bebida', BebidaSchema)