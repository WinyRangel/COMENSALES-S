const mongoose = require('mongoose');

const TipoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tipo', TipoSchema);
