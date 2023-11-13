const express = require ('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');



//api pedidos
router.post('/', pedidoController.crearPedido);
router.get('/', pedidoController.obtenerPedidos);

module.exports = router;