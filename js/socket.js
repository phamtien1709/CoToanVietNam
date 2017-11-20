var socket = io("http://localhost:6969");

socket.on("send-id-player", (data)=>{
    if(data.numid == 1){
        Co.idBlue = data.id;
        console.log(Co.idBlue);
    }
    if(data.numid == 2){
        Co.idRed = data.id;
        console.log(Co.idRed);
    }
});