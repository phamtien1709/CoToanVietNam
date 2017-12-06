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
  // console.log(5/0);
  // console.log(5%3-1);
  // console.log(-(5%3)+1);
  socket.on("disconnect", () => {
    // console.log(Co.idBlue);
    var id_prev = socket.id;
    console.log(`${socket.id} OUT!`);
    // console.log(socket.Phong);
    // console.log(socket.Mau);
    // console.log(socket.adapter.rooms);
    // socket.leave(socket.Phong);
    io.sockets.in(socket.Phong).emit("server-call-user-out", socket.Mau);
    // num_player -= 1;
  });
  var color = ["red","blue"];
  socket.on("start", (data) => {
    console.log(data);
    if(num_room > 100) num_room = 0;
    num_player += data.join;
    socket.join(`Room${num_room}`);
    socket.Phong = `Room${num_room}`;
    socket.Mau = color[2-num_player];
    socket.Toantu = {
      add: data.chooseAdd,
      sub: data.chooseSub,
      mul: data.chooseMul,
      div: data.chooseDiv,
      divper: data.chooseDivPer
    }
    // var roomnumber = `Room${num_room}`;
    // var id = socket.id;
    // console.log(roomnumber);
    //show room
    // console.log(socket.adapter.rooms.roomnumber);
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
    // console.log(num_player);
  });
  socket.on("blue-move", (data) => {
    io.sockets.in(socket.Phong).emit("request-move", data);
  });
  socket.on("red-move", (data) => {
    io.sockets.in(socket.Phong).emit("request-move", data);
  });
  socket.on("blue-eat", (data)=>{
    // console.log("blue eat");
    io.sockets.in(socket.Phong).emit("request-eat", data);
  });
  socket.on("red-eat", (data)=>{
    // console.log("red eat");
    // console.log(socket.Phong);
    io.sockets.in(socket.Phong).emit("request-eat", data);
  });
  socket.on("get_out", (data)=>{
    console.log(socket.Phong);
    socket.leave(socket.Phong);
    socket.emit("get_out_callback_client", socket.Mau);
    socket.broadcast.in(socket.Phong).emit("get_out_callback", socket.Mau);
  });
  socket.on("timeout_blue",(data)=>{
    io.sockets.in(socket.Phong).emit("timeout_blue", data);
  });
  socket.on("timeout_red",(data)=>{
    io.sockets.in(socket.Phong).emit("timeout_red", data);
  });
  socket.on("promise_deuce", (data)=>{
    socket.broadcast.in(socket.Phong).emit("promise_deuce_callback", socket.Mau);
  });
  socket.on("agree_promise_deuce", (data)=>{
    io.sockets.in(socket.Phong).emit("agree_promise_deuce_callback", "deuce");
  });
  socket.on("disagree_deuce", (data) => {
    socket.broadcast.in(socket.Phong).emit("disagree_deuce_callback", socket.Mau);
  })
  socket.on("leave-room", (data)=>{
    console.log(socket.Phong);
    socket.leave(socket.Phong);
    console.log(socket.adapter.rooms);
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
