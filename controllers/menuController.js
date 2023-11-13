const Menu = require("../models/Menu");

exports.crearMenu = async (req, res) =>
{
    try {
        let menu;

        //creamos pedido
        menu = new Menu(req.body);
        await  menu.save();
        res.send(menu);
    } catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}


exports.obtenerMenu = async (req, res) => {
    try{
        const menus = await Menu.find();
        res.json(menus)
    }catch(error){
        console.log(error);
        res.status(500).send('Error')
    }
}