const Pedido = require("../models/Pedido");

exports.crearPedido = async (req, res) =>
{
    try {
        let pedido;

        //creamos pedido
        pedido = new Pedido(req.body);
        await  pedido.save();
        res.send(pedido);
    } catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}

exports.obtenerPedidos = async (req, res) => {
    try{
        const pedidos = await Pedido.find();
        res.json(pedidos)
    }catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}