const express = require ('express');
const conectarDB = require ('./config/db')
const app = express ();

//Conección BD
conectarDB();

app.use(express.json());
//API OBTENER MESEROS
app.use('/api/meseros', require('./routes/mesero')) //funciona
//API pedido
app.use('/api/pedidos', require('./routes/pedido')) //funciona
//API Menu
app.use('/api/menus', require('./routes/menu')) //funciona
//API PAGO
app.use('/api/tipopagos', require ('./routes/tipo'))// funciona API SELECCIONAR PAGOS
//Api bebidad
app.use('/api/bebidas', require ('./routes/bebida'))// funciona API SELECCIONAR bebidas

//Ruta principal





app.listen(4000, () =>{
    console.log('Servidor corriendo correctamente');
})