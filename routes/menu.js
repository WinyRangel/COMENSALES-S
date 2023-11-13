const express = require ('express');
const router = express.Router();
const menuController = require ('../controllers/menuController')


//api meseros
router.post('/', menuController.crearMenu);
router.get('/', menuController.obtenerMenu);


module.exports = router;