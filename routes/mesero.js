const express = require ('express');
const router = express.Router();
const meseroController = require ('../controllers/meseroController')


//api meseros
router.post('/', meseroController.crearMesero);
router.get('/', meseroController.obtenerMeseros);


module.exports = router;