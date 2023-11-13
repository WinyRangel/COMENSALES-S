const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  numeroPedido: {
    type: Number,
    required: true
  },
  mesero: {
    nombreMesero: {
      type: String,
      required: true
    },
    emailMesero: {
      type: String,
      required: true
    }
  },
  cliente: {
    nombre: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  pedido: [
    {
      tipo: {
        type: String,
        required: true
      },
      nombre: {
        type: String,
        required: true
      },
      cantidad: {
        type: Number,
        required: true
      },
      fecha: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  tipoPago: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('Pedido', PedidoSchema);
