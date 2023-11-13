const mongoose = require('mongoose');

const MeseroSchema = new mongoose.Schema({
    numMesero:{
    type: Number,
    required: true
    },
    nombreMesero: {
    type: String,
    required: true
  },
  emailMesero:{
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Mesero', MeseroSchema);
