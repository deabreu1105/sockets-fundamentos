// ! Importamos io que se encuentra en el archivo ../server
const { io } = require('../server');

// * Con este codigo podemos verificar/detectar si el usuario esta conectado
io.on('connection', (client) => {
    console.info('Usuario conectado');

    // * Con este codigo enviamos mensajes al cliente(navegador)
    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // * Con este codigo detectamos si el usuario se desconecto
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // * Recibiendo mensaje del emit del cliente junto con el callback
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // ! Con broadcast emitimos a todos los usuarios conectados(a todos los navegadores)
        client.broadcast.emit('enviarMensaje', data);

        // * Si viene el mensaje.usuario
        /*if (data.usuario) {
            // * Debemos poner la funcion callback() para recibirlo
            callback({
                resp: 'Todo salio BIEN'
            });
        } else {
            callback({
                resp: 'Todo salio MAL'
            });
        }*/



    });

});