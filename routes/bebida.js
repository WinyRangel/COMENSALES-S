const express = require ('express');
const router = express.Router();
const bebidaController = require ('../controllers/bebidasControllers')


//api meseros
router.post('/', bebidaController.crearBebida);
router.get('/', bebidaController.obtenerBebida);


module.exports = router;