var socket = io.connect();
socket.on('connect', function (data) {
    socket.emit('join', 'Hello World from client');
});

/**
 * When disconnect event occured
 **/
socket.on('disconnect', function () {
    console.log('Disconnected');
});
  