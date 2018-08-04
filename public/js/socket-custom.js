var socket = io();

//Detecta la conexion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Detecta si se desconecta
socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Obed',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Mensaje del server', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor ', mensaje);
});