var playState = {
    preload: function () {
        Co.game.load.image('bg_quandaan', 'Assets/Bandau/BG_quandaan.png');
        Co.game.load.image('btn_cauhoa', 'Assets/Bandau/Button_cauhoa.png');
        Co.game.load.image('btn_xinthua', 'Assets/Bandau/Button_Xinthua.png');
        Co.game.load.image('btn_roiban', 'Assets/Bandau/Button_Roiban.png');
        Co.game.load.image('bg_time', 'Assets/Bandau/BG_Time.png');
        Co.game.load.image('ava', 'Assets/Bandau/kichthuocAvatar.png');
        Co.game.load.image('gui_setting', 'Assets/Chat/Guichat3.png');
        Co.game.load.image('bg_trudiem', 'Assets/Bandau/BG_trudiem.png');
        Co.game.load.image('bg_congdiem', 'Assets/Bandau/BG_congdiem.png');
        Co.game.load.image('gui_in_setting', 'Assets/Setting/Gui_Thoat.png');
        Co.game.load.image('yes_img', 'Assets/Setting/Button_Dongy.png');
        Co.game.load.image('no_img', 'Assets/Setting/Button_huy.png');
        Co.game.time.advancedTiming = true;
    },
    create: function () {
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
        //test room
        //TIMINGGG
        Co.timerBlue = Co.game.time.create();
        Co.timerRed = Co.game.time.create();
        Co.timerBlueEvent = Co.timerBlue.add(Phaser.Timer.MINUTE * 19 + Phaser.Timer.SECOND * 59, this.endTimerBlue, this);
        Co.timerRedEvent = Co.timerRed.add(Phaser.Timer.MINUTE * 19 + Phaser.Timer.SECOND * 59, this.endTimerRed, this);

        Co.game.physics.startSystem(Phaser.Physics.ARCADE);
        //win get
        Co.blueWin = false;
        Co.redWin = false;
        //drawMap
        Co.drawBoard = false;
        Co.newPos = [0, 0];
        Co.changeTurn = [Co.idBlue, Co.idRed];
        // console.log(Co.changeTurn);
        Co.blueFirst = 'blue';
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, Co.drawBoard);
        //drawChessDefault
        Co.chessGroup = Co.game.add.physicsGroup();
        Co.chesses = [];
        //vị trí cờ
        Co.chessesPos = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
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
            ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
            [0, 0, 0, 0, 'blue', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 'red', 0, 0, 0, 0],
            ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']
        ];
        this.drawChessOnBoard(Co.configs.PIECE_DEFAULT);
        //point user
        Co.userBluePoint = 2000;
        Co.userRedPoint = 2000;
        Co.displayingUserBluePoint = Co.game.add.text(130, 1385, `${Co.userBluePoint} $`, { font: "30px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.displayingUserRedPoint = Co.game.add.text(730, 1385, `${Co.userRedPoint} $`, { font: "30px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });

        //get point
        Co.pointBlueNow = 0;
        Co.pointBluePrev = 0;
        Co.pointRedNow = 0;
        Co.pointRedPrev = 0;
        Co.style = { font: "30px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" };
        Co.style2 = { font: "30px Arial", fill: "#33cc33", boundsAlignH: "center", boundsAlignV: "middle" };
        Co.displayingPointBlue = Co.game.add.text(130, 1430, `${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, { font: "30px Arial", fill: "#0099ff", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.displayingPointRed = Co.game.add.text(730, 1430, `${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, { font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.turnPlayer = Co.game.add.text(455, 1400, '', Co.style2);
        Co.turnPlayer.anchor.set(0.5);
        Co.game.add.text(480, 60, 'Xanh ăn: ', { font: "30px Arial", fill: "#0099ff", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.game.add.text(480, 110, 'Đỏ ăn: ', { font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
        //render quân đã ăn
        Co.ateList = {
            blue: [],
            red: []
        };

        //button in setting game
        var btn_roiban = Co.game.make.button(0, -150, 'btn_roiban');
        btn_roiban.anchor.set(0.5);
        btn_roiban.scale.set(2);
        var btn_cauhoa = Co.game.make.button(0, 0, 'btn_cauhoa');
        btn_cauhoa.scale.set(2);
        btn_cauhoa.anchor.set(0.5);
        var btn_xinthua = Co.game.make.button(0, 150, 'btn_xinthua');
        btn_xinthua.scale.set(2);
        btn_xinthua.anchor.set(0.5);

        //GUI roi ban
        var btn_yes_roiban = Co.game.make.button(-155, 180, 'yes_img');
        btn_yes_roiban.anchor.set(0.5);
        var btn_no_roiban = Co.game.make.button(155, 180, "no_img");
        btn_no_roiban.anchor.set(0.5);
        var popup_roiban = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'gui_in_setting');
        popup_roiban.alpha = 1;
        popup_roiban.anchor.set(0.5);
        popup_roiban.inputEnabled = true;
        popup_roiban.input.enableDrag();
        popup_roiban.scale.set(0);

        popup_roiban.addChild(btn_yes_roiban);
        popup_roiban.addChild(btn_no_roiban);

        btn_roiban.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_roiban.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
            Co.game.add.tween(popup_setting.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Linear.None, true);
        });
        btn_no_roiban.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_roiban.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        });
        btn_yes_roiban.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_roiban.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
            socket.emit("get_out", socket.id);
        });
        //GUI cau hoa
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

        btn_cauhoa.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_cauhoa.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
            Co.game.add.tween(popup_setting.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Linear.None, true);
        });
        btn_no_cauhoa.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_cauhoa.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        });
        btn_yes_cauhoa.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_cauhoa.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
            //socket
            socket.emit("promise_deuce", socket.id);
        });
        //GUI xin thua
        var btn_yes_xinthua = Co.game.make.button(-155, 180, 'yes_img');
        btn_yes_xinthua.anchor.set(0.5);
        var btn_no_xinthua = Co.game.make.button(155, 180, "no_img");
        btn_no_xinthua.anchor.set(0.5);
        var popup_xinthua = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'gui_in_setting');
        popup_xinthua.alpha = 1;
        popup_xinthua.anchor.set(0.5);
        popup_xinthua.inputEnabled = true;
        popup_xinthua.input.enableDrag();
        popup_xinthua.scale.set(0);

        popup_xinthua.addChild(btn_yes_xinthua);
        popup_xinthua.addChild(btn_no_xinthua);

        btn_xinthua.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_xinthua.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
            Co.game.add.tween(popup_setting.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Linear.None, true);
        });
        btn_no_xinthua.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_xinthua.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        });
        btn_yes_xinthua.events.onInputDown.add(()=>{
            Co.game.add.tween(popup_xinthua.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
            socket.emit("get_out", socket.id);
        })
        //skill button

        //Text chỉ bên
        if(socket.id == Co.idBlue) Co.game.add.text(100, 100, "Bạn quân XANH",{ font: "30px Arial", fill: "#0099ff", boundsAlignH: "center", boundsAlignV: "middle" });
        if(socket.id == Co.idRed) Co.game.add.text(100, 100, "Bạn quân ĐỎ",{ font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
        //popup setting ingame
        var btn_caidat = Co.game.add.button(50, 100, 'caidat', openPopup, this);
        btn_caidat.anchor.set(0.5);
        btn_caidat.input.useHandCursor = true;
        var popup_setting = Co.game.add.sprite(200, 200, 'gui_setting');
        popup_setting.alpha = 1;
        popup_setting.anchor.set(0.5);
        popup_setting.inputEnabled = true;
        popup_setting.input.enableDrag();
        popup_setting.scale.set(0);
        var btn_thoat = Co.game.make.sprite(140, -260, 'btn_thoat');
        btn_thoat.inputEnabled = true;
        btn_thoat.input.priorityID = 1;
        btn_thoat.input.useHandCursor = true;
        btn_thoat.events.onInputDown.add(closePopup, this);

        popup_setting.addChild(btn_thoat);
        popup_setting.addChild(btn_roiban);
        popup_setting.addChild(btn_cauhoa);
        popup_setting.addChild(btn_xinthua);
        var tween = null;
        function openPopup() {
            if ((tween !== null && tween.isRunning) || popup_setting.scale.x === 1) {
                return;
            }
            tween = Co.game.add.tween(popup_setting.scale).to({ x: 0.5, y: 0.5 }, 1000, Phaser.Easing.Elastic.Out, true);
        };
        function closePopup() {
            if (tween && tween.isRunning || popup_setting.scale.x === 0.1) {
                return;
            }
            tween = Co.game.add.tween(popup_setting.scale).to({ x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
        };

        //directGroup
        Co.directGroup = [];
        Co.directGroup.anchor = new Phaser.Point(0.5, 0.5);
        Co.directs = [];
        Co.directMoveto = {
            x: 0,
            y: 0
        };
        Co.directsP = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        Co.chonco = Co.game.add.sprite(-100, -100, 'chonco');
        Co.onMouseDown = false;
        Co.deuceGame = false;
        Co.timerBlue.start();
        Co.timerRed.start();
    },
    update: function () {
        if (Co.pointBlueNow !== Co.pointBluePrev) {
            // console.log(Co.ateList);
            Co.pointBluePrev = Co.pointBlueNow;
            Co.displayingPointBlue.setText(`${Co.pointBluePrev}/${Co.configs.WIN_POINT}`);
            //create add and sub point user
            var bg_congdiem = Co.game.add.sprite(120, 1385, 'bg_congdiem');
            var diemcong = Co.game.add.text(170, 1390, '+100', { font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
            Co.userBluePoint += 100;
            var bg_trudiem = Co.game.add.sprite(720, 1385, 'bg_trudiem');
            var diemtru = Co.game.add.text(770, 1390, '-100', { font: "30px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
            Co.userRedPoint -= 100;
            Co.game.add.tween(bg_congdiem).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.game.add.tween(diemcong).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.game.add.tween(bg_trudiem).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.game.add.tween(diemtru).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.displayingUserBluePoint.setText(`${Co.userBluePoint} $`);
            Co.displayingUserRedPoint.setText(`${Co.userRedPoint} $`);
        }
        if (Co.pointRedNow !== Co.pointRedPrev) {
            // console.log(Co.ateList[0].sprite.__proto__.revive());
            Co.pointRedPrev = Co.pointRedNow;
            Co.displayingPointRed.setText(`${Co.pointRedPrev}/${Co.configs.WIN_POINT}`);
            //create add and sub point user
            var bg_congdiem = Co.game.add.sprite(720, 1385, 'bg_congdiem');
            var diemcong = Co.game.add.text(770, 1390, '+100', { font: "30px Arial", fill: "#cc3300", boundsAlignH: "center", boundsAlignV: "middle" });
            Co.userRedPoint += 100;
            var bg_trudiem = Co.game.add.sprite(120, 1385, 'bg_trudiem');
            var diemtru = Co.game.add.text(170, 1390, '-100', { font: "30px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
            Co.userBluePoint -= 100;
            Co.game.add.tween(bg_congdiem).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.game.add.tween(diemcong).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.game.add.tween(bg_trudiem).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.game.add.tween(diemtru).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
            Co.displayingUserBluePoint.setText(`${Co.userBluePoint} $`);
            Co.displayingUserRedPoint.setText(`${Co.userRedPoint} $`);
        }
        if ((Co.pointBluePrev >= Co.configs.WIN_POINT) || (Co.pointRedPrev >= Co.configs.WIN_POINT)) {
            if (Co.pointBluePrev >= Co.configs.WIN_POINT) Co.blueWin = true;
            if (Co.pointRedPrev >= Co.configs.WIN_POINT) Co.redWin = true;
            setTimeout(function () {
                Co.game.state.start('win');
            }, 1200);;
        }
        if (Co.blueFirst == 'blue') {
            Co.turnPlayer.setText(`Lượt bên XANH..`);
            Co.timerRed.pause();
            Co.timerBlue.resume();
        }
        if (Co.blueFirst == 'red') {
            Co.turnPlayer.setText(`Lượt bên ĐỎ..`);
            Co.timerRed.resume();
            Co.timerBlue.pause();
        }
    },
    render: function () {
        var fps = Co.game.debug.text(`FPS: ${Co.game.time.fps} `, 800, 30);
        if (Co.ateList.blue.length > 0) {
            for (item in Co.ateList.blue) {
                Co.ateList.blue[item].sprite.position.x = 650 + item * 30;
                Co.ateList.blue[item].sprite.position.y = 70;
                Co.ateList.blue[item].sprite.scale.x = 0.5;
                Co.ateList.blue[item].sprite.scale.y = 0.5;
                Co.ateList.blue[item].sprite.revive();
            }
        }
        if (Co.ateList.red.length > 0) {
            for (item in Co.ateList.red) {
                Co.ateList.red[item].sprite.position.x = 650 + item * 30;
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
            //socket
            socket.emit("timeout_blue", "blue");
        }
        if (Co.timerRed.running) {
            Co.game.debug.text(this.formatTime(Math.round((Co.timerRedEvent.delay - Co.timerRed.ms) / 1000)), 740, 1350, "#000");
        }
        else {
            Co.game.debug.text("Hết giờ!", 750, 1350, "#B20044");
            //socket
            socket.emit("timeout_red", "red");
        }
    },
    endTimerBlue: function () {
        Co.timerBlue.stop();
    },
    endTimerRed: function () {
        Co.timerRed.stop();
    },
    formatTime: function (s) {
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
    drawChessOnBoard: function (chessArr) {
        for (i = 0; i < chessArr.length; i++) {
            for (j = 0; j < chessArr[i].length; j++) {
                switch (chessArr[i][j]) {
                    case 1: {
                        Co.chesses.push(new chess1Blue(j, i));
                        break;
                    }
                    case 2: {
                        Co.chesses.push(new chess2Blue(j, i));
                        break;
                    }
                    case 3: {
                        Co.chesses.push(new chess3Blue(j, i));
                        break;
                    }
                    case 4: {
                        Co.chesses.push(new chess4Blue(j, i));
                        break;
                    }
                    case 5: {
                        Co.chesses.push(new chess5Blue(j, i));
                        break;
                    }
                    case 6: {
                        Co.chesses.push(new chess6Blue(j, i));
                        break;
                    }
                    case 7: {
                        Co.chesses.push(new chess7Blue(j, i));
                        break;
                    }
                    case 8: {
                        Co.chesses.push(new chess8Blue(j, i));
                        break;
                    }
                    case 9: {
                        Co.chesses.push(new chess9Blue(j, i));
                        break;
                    }
                    case 10: {
                        Co.chesses.push(new chess10Blue(j, i));
                        break;
                    }
                    case 100: {
                        Co.chesses.push(new chess10Red(j, i));
                        break;
                    }
                    case 99: {
                        Co.chesses.push(new chess9Red(j, i));
                        break;
                    }
                    case 98: {
                        Co.chesses.push(new chess8Red(j, i));
                        break;
                    }
                    case 97: {
                        Co.chesses.push(new chess7Red(j, i));
                        break;
                    }
                    case 96: {
                        Co.chesses.push(new chess6Red(j, i));
                        break;
                    }
                    case 95: {
                        Co.chesses.push(new chess5Red(j, i));
                        break;
                    }
                    case 94: {
                        Co.chesses.push(new chess4Red(j, i));
                        break;
                    }
                    case 93: {
                        Co.chesses.push(new chess3Red(j, i));
                        break;
                    }
                    case 92: {
                        Co.chesses.push(new chess2Red(j, i));
                        break;
                    }
                    case 91: {
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