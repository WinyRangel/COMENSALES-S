const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  numTipo:{
    type: Number,
    require: true
  },
  tipo: {
    type: String,
    require: true
  },
  opciones: [{
      nombre: {
        type: String,
        precio: Number,
        descripcion: String
      }}]
});

module.exports = mongoose.model('Menu', MenuSchema);
