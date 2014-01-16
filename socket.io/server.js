var express = require('express'),
    sio = require('socket.io');

app = express.createServer( express.static('public'));

app.listen(3000);

var io = sio.listen(app);
io.sockets.on('connection', function (socket) {
    socket.on('join', function (name) {
        socket.nickname = name;
        socket.broadcast.emit('announcement', '欢迎' + name + '来到聊天室！');
    })

    socket.on('text', function (msg) {
        socket.broadcast.emit('text', socket.nickname, msg);
    })
})
