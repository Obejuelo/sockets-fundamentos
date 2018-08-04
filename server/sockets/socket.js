const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    //Enviar un mensaje cuando se conecta el usuario
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    });

    //Si el usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchamos el mensaje enviado
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!!!!'
        //     });
        // }
    });
});