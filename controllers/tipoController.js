const Tipo = require("../models/Tipo");


exports.crearFormaPago = async (req, res) =>
{
    try {
        let tipo;

        //creamos pedido
        tipo = new Tipo(req.body);
        await  tipo.save();
        res.send(tipo);
    } catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}


exports.obtenerPago = async (req, res) => {
    try{
        const tipos = await Tipo.find();
        res.json(tipos)
    }catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}