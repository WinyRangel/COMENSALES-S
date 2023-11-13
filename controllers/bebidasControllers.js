const Bebida = require("../models/Bebida");

exports.crearBebida = async (req, res) =>
{
    try {
        let bebida;

        //creamos pedido
        bebida = new Bebida(req.body);
        await  bebida.save();
        res.send(bebida);
    } catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}


exports.obtenerBebida = async (req, res) => {
    try{
        const bebidas = await Bebida.find();
        res.json(bebidas)
    }catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}