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
    if(data === "blue") {
        Co.game.add.text(Co.game.world.centerX - 180,Co.game.world.centerY + 560, "Đối phương đã rời khỏi\n                bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.redWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
    if(data === "red"){
        Co.game.add.text(Co.game.world.centerX - 180,Co.game.world.centerY + 560, "Đối phương đã rời khỏi\n                 bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.blueWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    } 
});

socket.on("timeout_blue", (data)=>{
    if(data === "blue") {
        Co.redWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
});

socket.on("timeout_red", (data)=>{
    if(data === "red"){
        Co.blueWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    } 
});

socket.on("get_out_callback", (data)=>{
    if(data === "blue") {
        Co.game.add.text(Co.game.world.centerX - 180,Co.game.world.centerY + 560, "XANH đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.redWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1800);
    }
    if(data === "red"){
        Co.game.add.text(Co.game.world.centerX - 180,Co.game.world.centerY + 560, "ĐỎ đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.blueWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1800);
    }
});

socket.on("promise_deuce_callback", (data)=>{
    // console.log(`${data} promise deuce!`);
    var txt_answer_cauhoa = Co.game.make.text(-210,-50, "Đối thủ của bạn muốn cầu \nhòa, bạn có đồng ý không?", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
    var btn_yes_cauhoa = Co.game.make.button(-155, 180, 'yes_img');
    btn_yes_cauhoa.anchor.set(0.5);
    var btn_no_cauhoa = Co.game.make.button(155, 180, "no_img");
    btn_no_cauhoa.anchor.set(0.5);
    var popup_cauhoa = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'gui_in_setting');
    popup_cauhoa.alpha = 1;
    popup_cauhoa.anchor.set(0.5);
    popup_cauhoa.inputEnabled = true;
    popup_cauhoa.input.enableDrag();
    popup_cauhoa.scale.set(0);

    popup_cauhoa.addChild(btn_yes_cauhoa);
    popup_cauhoa.addChild(btn_no_cauhoa);
    popup_cauhoa.addChild(txt_answer_cauhoa);

    Co.game.add.tween(popup_cauhoa.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

    btn_no_cauhoa.events.onInputDown.add(()=>{
        Co.game.add.tween(popup_cauhoa.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        socket.emit("disagree_deuce", socket.id);
    });
    btn_yes_cauhoa.events.onInputDown.add(()=>{
        Co.game.add.tween(popup_cauhoa.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        //socket
        socket.emit("agree_promise_deuce", socket.id);
    });
});

socket.on("agree_promise_deuce_callback", (data)=>{
    Co.cauhoa_answer_agree = Co.game.add.text(Co.game.world.centerX - 190,Co.game.world.centerY + 560, "Đối phương đồng ý", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
    Co.deuceGame = true;
    setTimeout(function () {
        Co.game.state.start('win');
    }, 1200);
});
socket.on("disagree_deuce_callback", (data)=>{
    Co.waiting.destroy();
    Co.cauhoa_answer_disagree = Co.game.add.text(Co.game.world.centerX - 190,Co.game.world.centerY + 560, "Đối phương không đồng ý", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
    setTimeout(function(){
        Co.cauhoa_answer_disagree.destroy();
    }, 1800);
});

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
})