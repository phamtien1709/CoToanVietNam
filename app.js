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
    // console.log(Co.idBlue);
    var id_prev = socket.id;
    console.log(`${socket.id} OUT!`);
    io.sockets.in(socket.Phong).emit("server-call-user-out", socket.Mau);
  });
  socket.on("timeout_blue",(data)=>{
    io.sockets.in(socket.Phong).emit("timeout_blue", data);
  });
  socket.on("timeout_red",(data)=>{
    io.sockets.in(socket.Phong).emit("timeout_red", data);
  });

  socket.on("leave-room-after-out", (data)=>{
    socket.leave(socket.Phong);
    socket.emit("leave-room-callback", socket.id);
  });
  socket.on("user_chat", (data)=>{
    console.log(socket.Mau);
    console.log(data);
    io.sockets.in(socket.Phong).emit("chat_callback", {
      color: socket.Mau,
      text : data
    });
  })
});
