var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));
var num_player = 0;
http.listen(6969, function () {
  console.log('Server started. Listening on *:6969');
});
io.on("connection", (socket) => {
  console.log("have connect! ID:" + socket.id);
  socket.on("disconnect", () => {
    console.log(`${socket.id} OUT!`);
  });
  socket.on("start", (data) => {
    num_player += 1;
    io.sockets.emit("send-id-player", {
      id: socket.id,
      numid: num_player
    });
    if (num_player == 2) {
      io.sockets.emit("server-send-data", num_player);
      num_player = 0;
    }
    console.log(data + num_player);
  });
  socket.on("blue-move", (data) => {
    io.sockets.emit("request-move", data);
  });
  socket.on("red-move", (data)=>{
    io.sockets.emit("request-move", data);
  })
  // if(num_player == 2){
  //   console.log("ready");
  //   io.sockets.emit("server-send-data", num_player);
  // }
});

