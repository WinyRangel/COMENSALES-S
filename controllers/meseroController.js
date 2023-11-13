const Mesero = require("../models/Mesero");


exports.crearMesero = async (req, res) =>
{
    try {
        let mesero;

        //creamos pedido
        mesero = new Mesero(req.body);
        await  mesero.save();
        res.send(mesero);
    } catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}


exports.obtenerMeseros = async (req, res) => {
    try{
        const meseros = await Mesero.find();
        res.json(meseros)
    }catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}