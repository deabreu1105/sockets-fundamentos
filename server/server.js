const express = require('express');

// ? Cargamos la libreria socket.io
const socketIO = require('socket.io');
// ? Cargamos la libreria nativa de node de http para poder trabajar con socket
const http = require('http');

const path = require('path');

const app = express();
// ! Para que socketpueda trabajar con express debemos hacer lo siguiente
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// * con este middelware estamos haciendo que la carpeta publica se pueda acceder publicamente
app.use(express.static(publicPath));

// ! inicializando el socket
// * esta es la comunicacion con el backend
// let io = socketIO(server);
// ! Aqui exportamos io para ordenar un poco mas el codigo
module.exports.io = socketIO(server);
// ! Para que utilize ese archivo
require('./sockets/socket');



// app.listen(port, (err) => {
// ! en vez de llamar app.listen llamo a server.listen configurado en la linea 12
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});