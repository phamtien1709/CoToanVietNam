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
io.on("connection", (socket) => {
  console.log("have connect! ID:" + socket.id);
  socket.on("disconnect", () => {
    console.log(`${socket.id} OUT!`);
    console.log(socket.Phong);
    io.sockets.emit("server-call-user-out", socket.id);
    // num_player -= 1;
  });
  socket.on("start", (data) => {
    if(num_room > 100) num_room = 0;
    num_player += data.join;
    socket.join(`Room${num_room}`);
    socket.Phong = `Room${num_room}`;
    //show room
    console.log(socket.adapter.rooms);
    io.sockets.in(socket.Phong).emit("server-send-room-number", {
      roomnumber : num_room,
      id : socket.id
    })
    io.sockets.in(socket.Phong).emit("send-id-player", {
      id: socket.id,
      numid: num_player
    });
    if ((num_player % 2 == 0) && (num_player !== 0)) {
      io.sockets.in(socket.Phong).emit("server-send-data", num_player);
      num_player = 0;
      num_room += 1;
    }
    console.log(num_player);
  });
  socket.on("blue-move", (data) => {
    io.sockets.in(socket.Phong).emit("request-move", data);
  });
  socket.on("red-move", (data) => {
    io.sockets.in(socket.Phong).emit("request-move", data);
  });
  socket.on("blue-eat", (data)=>{
    console.log("blue eat");
    io.sockets.in(socket.Phong).emit("request-eat", data);
  });
  socket.on("red-eat", (data)=>{
    console.log("red eat");
    io.sockets.in(socket.Phong).emit("request-eat", data);
  });

  // if(num_player == 2){
  //   console.log("ready");
  //   io.sockets.emit("server-send-data", num_player);
  // }
});

