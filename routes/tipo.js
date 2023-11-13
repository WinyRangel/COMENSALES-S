const express = require ('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');



//api pedidos
router.post('/', tipoController.crearFormaPago);
router.get('/', tipoController.obtenerPago);


module.exports = router;