var socket = io.connect();
socket.on('connect', function (data) {
    socket.emit('join', user_id);
});

/**
 * When disconnect event occured
 **/
socket.on('disconnect', function () {
    console.log('Disconnected');
});
  