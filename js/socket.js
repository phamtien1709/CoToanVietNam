var socket = io("http://localhost:6969");

socket.on("send-id-player", (data) => {
    if (data.numid == 1) {
        Co.idBlue = data.id;
        // console.log(Co.idBlue);
    }
    if (data.numid == 2) {
        Co.idRed = data.id;
        // console.log(Co.idRed);
    }
});

socket.on("server-call-user-out", (data)=>{
    // console.log(data);
    // console.log(Co.idBlue);
    // console.log(Co.idRed);
    // console.log(socket.adapter.rooms);
    if(data === "blue") {
        // console.log(data);
        // console.log(Co.idBlue);
        // console.log("Red Win");
        Co.redWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
    if(data === "red"){
        // console.log(data);
        // console.log(Co.idRed);
        // console.log("Blue Win");
        Co.blueWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    } 
})

socket.on("server-send-room-number", (data)=>{
    // console.log(`ID ${data.id} go to room ${data.roomnumber}`);
});

socket.on("request-move", (data) => {
    var obj = Co.chesses.find((obj) => {
        if ((obj.x === data.positionPrev.x) && (obj.y === data.positionPrev.y)) {
            return obj;
        }
    });
    // console.log(obj);
    for (i in Co.chesses) {
        if ((Co.chesses[i].x == obj.x) && (Co.chesses[i].y == obj.y)) {
            // console.log("move");
            Co.chesses[i].sprite.position.x = data.positionAfter.x;
            Co.chesses[i].sprite.position.y = data.positionAfter.y;
            Co.chesses[i].x = data.positionAfter.x;
            Co.chesses[i].y = data.positionAfter.y;
        }
    }
    //lawps gias trij
    Co.chessesPos[data.positionPrevOnMatrix.y][data.positionPrevOnMatrix.x] = 0;
    Co.chessesValue[data.positionPrevOnMatrix.y][data.positionPrevOnMatrix.x] = 0;
    Co.chessesType[data.positionPrevOnMatrix.y][data.positionPrevOnMatrix.x] = 0;
    Co.chessesPos[data.positionAfterOnMatrix.y][data.positionAfterOnMatrix.x] = data.chessesPos;
    Co.chessesValue[data.positionAfterOnMatrix.y][data.positionAfterOnMatrix.x] = data.chessesValue;
    Co.chessesType[data.positionAfterOnMatrix.y][data.positionAfterOnMatrix.x] = data.chessesType;
    Co.blueFirst = data.turn;
    // console.log(Co.blueFirst);
    // console.log(data);
    // console.log(Co.chessGroup);
    // console.log(Co.chesses);
});
socket.on("request-eat", (data)=>{
    var obj = Co.chessGroup.children.find((obj) => {
        if ((obj.x === data.posReal.x) && (obj.y === data.posReal.y)) {
            return obj;
        }
    });
    // console.log(obj);
    for (i = 0; i < Co.chesses.length; i++) {
        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y)) {
            // console.log(Co.chesses[i]);
            Co.chesses[i].sprite.kill();
            if(data.chessesType == "blue") Co.ateList.blue.push(Co.chesses[i]);
            if(data.chessesType == "red") Co.ateList.red.push(Co.chesses[i]);
            Co.chesses.splice(i, 1);
        }
    };
    var obj2 = Co.chesses.find((obj) => {
        if ((obj.x === data.positionPrev.x) && (obj.y === data.positionPrev.y)) {
            return obj;
        }
    });
    // console.log(obj);
    for (i in Co.chesses) {
        if ((Co.chesses[i].x == obj2.x) && (Co.chesses[i].y == obj2.y)) {
            // console.log("move");
            Co.chesses[i].sprite.position.x = data.positionAfter.x;
            Co.chesses[i].sprite.position.y = data.positionAfter.y;
            Co.chesses[i].x = data.positionAfter.x;
            Co.chesses[i].y = data.positionAfter.y;
        }
    }
    Co.chessesPos[data.positionPrevOnMatrix.y][data.positionPrevOnMatrix.x] = 0;
    Co.chessesValue[data.positionPrevOnMatrix.y][data.positionPrevOnMatrix.x] = 0;
    Co.chessesType[data.positionPrevOnMatrix.y][data.positionPrevOnMatrix.x] = 0;
    Co.chessesPos[data.positionAfterOnMatrix.y][data.positionAfterOnMatrix.x] = data.chessesPos;
    if (Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] === 10) {
        if(data.turn == "red") Co.pointBlueNow += 100;
        if(data.turn == "blue") Co.pointRedNow += 100;
    } else {
        if(data.turn == "red") Co.pointBlueNow += Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100];
        if(data.turn == "blue") Co.pointRedNow += Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100];
    }
    Co.chessesValue[data.positionAfterOnMatrix.y][data.positionAfterOnMatrix.x] = data.chessesValue;
    Co.chessesType[data.positionAfterOnMatrix.y][data.positionAfterOnMatrix.x] = data.chessesType;
    Co.blueFirst = data.turn;
    // console.log(Co.blueFirst);
    // console.log(data);
    // console.log(Co.chessesType);
    // console.log(Co.chessesValue);
    // console.log(Co.chessesPos);
})