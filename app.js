var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
});
io.on("connection", (socket)=>{
  console.log("have connect! ID:" + socket.id);
  socket.on("disconnect", () =>{
    console.log(`${socket.id} OUT!`);
  })
});

