var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));
var num_player = 0;
var num_room = 1;
http.listen(6969, function () {
  console.log('Server started. Listening on *:6969');
});
