var playState = {
    preload: function(){
        Co.game.load.image('bg_quandaan', 'Assets/Bandau/BG_quandaan.png');
        Co.game.load.image('bg_time', 'Assets/Bandau/BG_Time.png');
        Co.game.load.image('ava', 'Assets/Bandau/kichthuocAvatar.png');
        Co.game.load.image('gui_setting', 'Assets/Chat/Guichat2.png');
        Co.game.time.advancedTiming = true;
    },
    create: function(){
        Co.game.add.sprite(0, 0, 'bg');
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
        Co.timerBlueEvent = Co.timerBlue.add(Phaser.Timer.MINUTE *15 + Phaser.Timer.SECOND *59, this.endTimerBlue, this);
        Co.timerRedEvent = Co.timerRed.add(Phaser.Timer.MINUTE *15 + Phaser.Timer.SECOND *59, this.endTimerRed, this);

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
        Co.style = { font: "30px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" };
        Co.style2 = { font: "30px Arial", fill: "#33cc33", boundsAlignH: "center", boundsAlignV: "middle" };
        Co.displayingPointBlue = Co.game.add.text(130,1430, `${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, { font: "30px Arial", fill: "#0099ff", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.displayingPointRed = Co.game.add.text(730,1430, `${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, { font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.turnPlayer = Co.game.add.text(330, 1400, '', Co.style2);
        Co.game.add.text(480, 60,'Xanh ăn: ', { font: "30px Arial", fill: "#0099ff", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.game.add.text(480, 110,'Đỏ ăn: ', { font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
        //render quân đã ăn
        Co.ateList = {
           blue: [], 
           red:  []
        };
        //popup setting ingame
        var btn_caidat = Co.game.add.button(50, 100, 'caidat', openPopup, this);
        btn_caidat.anchor.set(0.5);
        btn_caidat.input.useHandCursor = true;
        var popup_setting = Co.game.add.sprite(250, 200, 'gui_setting');
        popup_setting.alpha = 0.8;
        popup_setting.anchor.set(0.5);
        popup_setting.inputEnabled = true;
        popup_setting.input.enableDrag();
        popup_setting.scale.set(0);
        var btn_thoat = Co.game.make.sprite(220, -250, 'btn_thoat');
        btn_thoat.inputEnabled = true;
        btn_thoat.input.priorityID = 1;
        btn_thoat.input.useHandCursor = true;
        btn_thoat.events.onInputDown.add(closePopup, this);

        popup_setting.addChild(btn_thoat);
        var tween = null;
        function openPopup(){
            if ((tween !== null && tween.isRunning) || popup_setting.scale.x === 1)
            {
                return;
            } 
            tween = Co.game.add.tween(popup_setting.scale).to( { x: 0.5, y: 0.5 }, 1000, Phaser.Easing.Elastic.Out, true);           
        };
        function closePopup(){
            if (tween && tween.isRunning || popup_setting.scale.x === 0.1)
            {
                return;
            }
            tween = Co.game.add.tween(popup_setting.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
        };

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
            // console.log(Co.ateList);
            Co.pointBluePrev = Co.pointBlueNow;
            Co.displayingPointBlue.setText(`${Co.pointBluePrev}/${Co.configs.WIN_POINT}`);
        }
        if(Co.pointRedNow !== Co.pointRedPrev){
            // console.log(Co.ateList[0].sprite.__proto__.revive());
            Co.pointRedPrev = Co.pointRedNow;
            Co.displayingPointRed.setText(`${Co.pointRedPrev}/${Co.configs.WIN_POINT}`);
        }
        if((Co.pointBluePrev >= Co.configs.WIN_POINT)||(Co.pointRedPrev >= Co.configs.WIN_POINT)){
            if(Co.pointBluePrev >= Co.configs.WIN_POINT) Co.blueWin = true;
            if(Co.pointRedPrev >= Co.configs.WIN_POINT) Co.redWin = true;
            setTimeout(function(){
                Co.game.state.start('win');
            }, 1200);;
        }
        if(Co.blueFirst == 'blue'){
            Co.turnPlayer.setText(`Lượt bên XANH..`);
            Co.timerRed.pause();
            Co.timerBlue.resume();
        }
        if(Co.blueFirst == 'red'){
            Co.turnPlayer.setText(`Lượt bên ĐỎ..`);
            Co.timerRed.resume();
            Co.timerBlue.pause();
        }
    },
    render: function(){
        var fps = Co.game.debug.text(`FPS: ${Co.game.time.fps} `, 800, 30);
        if(Co.ateList.blue.length>0){
            for(item in Co.ateList.blue){
                Co.ateList.blue[item].sprite.position.x = 650 + item*30;
                Co.ateList.blue[item].sprite.position.y = 70;
                Co.ateList.blue[item].sprite.scale.x = 0.5;
                Co.ateList.blue[item].sprite.scale.y = 0.5;
                Co.ateList.blue[item].sprite.revive();
            }
            // Co.ateList[0].sprite.position.x = 100;
            // Co.ateList[0].sprite.position.y = 100;
            // Co.ateList[0].sprite.revive();
        }
        if(Co.ateList.red.length>0){
            for(item in Co.ateList.red){
                Co.ateList.red[item].sprite.position.x = 650 + item*30;
                Co.ateList.red[item].sprite.position.y = 120;
                Co.ateList.red[item].sprite.scale.x = 0.5;
                Co.ateList.red[item].sprite.scale.y = 0.5;
                Co.ateList.red[item].sprite.revive();
            }
        }
        var font;
        if (Co.timerBlue.running) {
            font = Co.game.debug.text(this.formatTime(Math.round((Co.timerBlueEvent.delay - Co.timerBlue.ms) / 1000)), 140, 1350, "#000");
        }
        else {
            Co.game.debug.text("Hết giờ!", 140, 1350, "#B20044");
            Co.redWin = true;
            setTimeout(function(){
                Co.game.state.start('win');
            }, 1200);;
        }
        if (Co.timerRed.running) {
            Co.game.debug.text(this.formatTime(Math.round((Co.timerRedEvent.delay - Co.timerRed.ms) / 1000)), 740, 1350, "#000");
        }
        else {
            Co.game.debug.text("Hết giờ!", 750, 1350, "#B20044");
            Co.blueWin = true;
            setTimeout(function(){
                Co.game.state.start('win');
            }, 1200);;
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