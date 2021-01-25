 // Los on son para escuchar al servidor
 // los emit para emitir mensajes al servidor
 // * Inicalizamos socket en el frontend
 var socket = io();

 // * Funcion basica de socket para saber si nos conectamos al servidor
 socket.on('connect', function() {
     console.log('%cConectado al servidor', 'color:red');
 });
 // *  Funcion basica de socket para saber si perdimos conexion con el serv
 socket.on('disconnect', function() {
     console.log('Perdimos conexión con el servidor');
 })


 // * Funcion para emitir mensages al servidor normalmente se le pasa un objeto
 socket.emit('enviarMensaje', {
     usuario: 'Daniel',
     mensaje: 'Hola mundo'
 }, function(respuesta) { // Recibimos el callback del servidor
     // * Con este callback verificamos si no hubo problemas al emitir mensaje
     console.log('Respuesta server: ', respuesta);
 });

 // * Funcion para recibir mensajes desde el servidor donde mensaje es lo que recibo
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor dice:', mensaje);
 });