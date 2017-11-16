var playState = {
    preload: function(){
        Co.game.load.image('bg_quandaan', 'Assets/Bandau/BG_quandaan.png');
        Co.game.load.image('bg_time', 'Assets/Bandau/BG_Time.png');
        Co.game.load.image('ava', 'Assets/Bandau/kichthuocAvatar.png');
        Co.game.time.advancedTiming = true;
    },
    create: function(){
        Co.game.add.sprite(0, 0, 'bg');
        var btn_caidat = Co.game.add.button(50, 100, 'caidat');
        btn_caidat.anchor.set(0.5);
        var bg_quandaan = Co.game.add.sprite(750, 100, 'bg_quandaan');
        bg_quandaan.anchor.set(0.5);
        var bg_timeRed = Co.game.add.sprite(150, 1350, 'bg_time');
        bg_timeRed.anchor.set(0.5);
        var bg_timeBlue = Co.game.add.sprite(750, 1350, 'bg_time');
        bg_timeBlue.anchor.set(0.5);
        var ava_blue = Co.game.add.sprite(70, 1420, 'ava');
        ava_blue.anchor.set(0.5);
        var ava_red = Co.game.add.sprite(670, 1420, 'ava');
        ava_red.anchor.set(0.5);
        //TIMINGGG
        Co.timerBlue = Co.game.time.create();
        Co.timerRed = Co.game.time.create();
        Co.timerBlueEvent = Co.timerBlue.add(Phaser.Timer.MINUTE *15+ Phaser.Timer.SECOND *59, this.endTimerBlue, this);
        Co.timerRedEvent = Co.timerRed.add(Phaser.Timer.MINUTE *15+ Phaser.Timer.SECOND *59, this.endTimerRed, this);

        Co.game.physics.startSystem(Phaser.Physics.ARCADE);
        //win get
        Co.blueWin = false;
        Co.redWin = false;
        //drawMap
        Co.drawBoard = false;
        Co.newPos = [0,0];
        Co.blueFirst = 'blue';
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, Co.drawBoard);
        //drawChessDefault
        Co.chessGroup = Co.game.add.physicsGroup();
        Co.chesses = [];
        //vị trí cờ
        Co.chessesPos = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];
        //giá trị cờ
        Co.chessesValue = [
            [9, 8, 7, 6, 5, 4, 3, 2, 1],
            [0, 0, 0, 0, 10, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 10, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6, 7, 8, 9]
        ];
        //groupKill
        Co.posKillGroup = [];
        Co.killGroup = [];
        //loại cờ
        Co.chessesType = [
            ['blue','blue','blue','blue','blue','blue','blue','blue','blue'],
            [0,0,0,0,'blue',0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,'red',0,0,0,0],
            ['red','red','red','red','red','red','red','red','red']
        ];
        this.drawChessOnBoard(Co.configs.PIECE_DEFAULT);
        //get point
        Co.pointBlueNow = 0;
        Co.pointBluePrev = 0;
        Co.pointRedNow = 0;
        Co.pointRedPrev = 0;
        Co.style = { font: "30px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        Co.displayingPointBlue = Co.game.add.text(10,Co.configs.HEAD_HEIGHT-100, `Blue: ${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, Co.style);
        Co.displayingPointRed = Co.game.add.text(700,Co.configs.HEAD_HEIGHT-100, `Red: ${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, Co.style);
        //directGroup
        Co.directGroup = [];
        Co.directGroup.anchor = new Phaser.Point(0.5,0.5);
        Co.directs = [];
        Co.directMoveto = {
            x : 0,
            y : 0
        };
        Co.directsP = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];
        Co.chonco = Co.game.add.sprite(-100, -100, 'chonco');
        Co.onMouseDown = false;
        Co.timerBlue.start();
        Co.timerRed.start();
    },
    update: function(){
        if(Co.pointBlueNow !== Co.pointBluePrev){
            Co.pointBluePrev = Co.pointBlueNow;
            Co.displayingPointBlue.setText(`Blue: ${Co.pointBluePrev}/${Co.configs.WIN_POINT}`);
        }
        if(Co.pointRedNow !== Co.pointRedPrev){
            Co.pointRedPrev = Co.pointRedNow;
            Co.displayingPointRed.setText(`Red: ${Co.pointRedPrev}/${Co.configs.WIN_POINT}`);
        }
        if((Co.pointBluePrev >= Co.configs.WIN_POINT)||(Co.pointRedPrev >= Co.configs.WIN_POINT)){
            if(Co.pointBluePrev >= Co.configs.WIN_POINT) Co.blueWin = true;
            if(Co.pointRedPrev >= Co.configs.WIN_POINT) Co.redWin = true;
            setTimeout(function(){
                Co.game.state.start('win');
            }, 1200);;
        }
        if(Co.blueFirst == 'blue'){
            Co.timerRed.pause();
            Co.timerBlue.resume();
        }
        if(Co.blueFirst == 'red'){
            Co.timerRed.resume();
            Co.timerBlue.pause();
        }
    },
    render: function(){
        var fps = Co.game.debug.text(`FPS: ${Co.game.time.fps} `, 800, 30);
        var font;
        if (Co.timerBlue.running) {
            font = Co.game.debug.text(this.formatTime(Math.round((Co.timerBlueEvent.delay - Co.timerBlue.ms) / 1000)), 120, 1350, "#000");
        }
        else {
            Co.game.debug.text("Done!", 120, 1350, "#0f0");
        }
        if (Co.timerRed.running) {
            Co.game.debug.text(this.formatTime(Math.round((Co.timerRedEvent.delay - Co.timerRed.ms) / 1000)), 720, 1350, "#000");
        }
        else {
            Co.game.debug.text("Done!", 720, 1350, "#0f0");
        }
        // console.log(fps);
        // fps.font = 'Arial';
        // fps.fontSize = 12;
        // Co.game.debug.text("Tween running: " + !this.idleBallTween.pendingDelete, 2, 110);
    },
    endTimerBlue: function(){
        Co.timerBlue.stop();
    },
    endTimerRed: function(){
        Co.timerRed.stop();
    },
    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);   
    },
    drawBoardDefault: function (boardArr, drawBoard) {
        for (i = 0; i < boardArr.length; i++) {
            for (j = 0; j < boardArr[i].length; j++) {
                if (boardArr[i][j] === 1) {
                    Co.game.add.sprite(j * 100, i * 100 + Co.configs.HEAD_HEIGHT, 'oden');
                } else if (boardArr[i][j] === 2) {
                    Co.game.add.sprite(j * 100, i * 100 + Co.configs.HEAD_HEIGHT, 'otrang');
                } else if (boardArr[i][j] === 3) {
                    Co.game.add.sprite(j * 100, i * 100 + Co.configs.HEAD_HEIGHT, 'otuong');
                }
            }
        }
        return drawBoard = true;
    },
    drawChessOnBoard: function(chessArr){
        for (i = 0; i < chessArr.length; i++){
            for(j=0; j<chessArr[i].length; j++){
                switch (chessArr[i][j]){
                    case 1 : {
                        Co.chesses.push(new chess1Blue(j, i));
                        break;
                    }
                    case 2 : {
                        Co.chesses.push(new chess2Blue(j, i));
                        break;
                    }
                    case 3 : {
                        Co.chesses.push(new chess3Blue(j, i));
                        break;
                    }
                    case 4 : {
                        Co.chesses.push(new chess4Blue(j, i));
                        break;
                    }
                    case 5 : {
                        Co.chesses.push(new chess5Blue(j, i));
                        break;
                    }
                    case 6 : {
                        Co.chesses.push(new chess6Blue(j, i));
                        break;
                    }
                    case 7 : {
                        Co.chesses.push(new chess7Blue(j, i));
                        break;
                    }
                    case 8 : {
                        Co.chesses.push(new chess8Blue(j, i));
                        break;
                    }
                    case 9 : {
                        Co.chesses.push(new chess9Blue(j, i));
                        break;
                    }
                    case 10 : {
                        Co.chesses.push(new chess10Blue(j, i));
                        break;
                    }
                    case 100 : {
                        Co.chesses.push(new chess10Red(j, i));
                        break;
                    }
                    case 99 : {
                        Co.chesses.push(new chess9Red(j, i));
                        break;
                    }
                    case 98 : {
                        Co.chesses.push(new chess8Red(j, i));
                        break;
                    }
                    case 97 : {
                        Co.chesses.push(new chess7Red(j, i));
                        break;
                    }
                    case 96 : {
                        Co.chesses.push(new chess6Red(j, i));
                        break;
                    }
                    case 95 : {
                        Co.chesses.push(new chess5Red(j, i));
                        break;
                    }
                    case 94 : {
                        Co.chesses.push(new chess4Red(j, i));
                        break;
                    }
                    case 93 : {
                        Co.chesses.push(new chess3Red(j, i));
                        break;
                    }
                    case 92 : {
                        Co.chesses.push(new chess2Red(j, i));
                        break;
                    }
                    case 91 : {
                        Co.chesses.push(new chess1Red(j, i));
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }

}