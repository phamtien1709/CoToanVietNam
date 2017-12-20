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
    Co.game.load.image('btn_chat', 'Assets/Bandau/Iconchat.png');
    Co.game.load.image('btn_chatbox', 'Assets/Chat/Button_chat.png');
    Co.game.load.image('btn_chatnhanh', 'Assets/Chat/Button_chatnhanh.png');
    Co.game.load.image('gui_chat1', 'Assets/Chat/Guichat1.png');
    Co.game.load.image('gui_chat2', 'Assets/Chat/Guichat2.png');
    Co.game.load.image('gui_chat3', 'Assets/Chat/Guichat3.png');
    Co.game.load.image('tooltip', 'Assets/Chat/tooltip.png');
    Co.game.load.image('ava_fb_blue', `https://graph.facebook.com/${Co.idBlue}/picture?width=100`);
    Co.game.load.image('ava_fb_red', `https://graph.facebook.com/${Co.idRed}/picture?width=100`);
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
    var ava_blue = Co.game.add.sprite(70, 1420, 'ava_fb_blue');
    ava_blue.anchor.set(0.5);
    var ava_red = Co.game.add.sprite(670, 1420, 'ava_fb_red');
    ava_red.anchor.set(0.5);
    //test room
    //defined math
    var gui_pheptoan = Co.game.add.sprite(250, 50, 'GUIchonpheptoan');
    gui_pheptoan.anchor.set(0.5);
    gui_pheptoan.scale.set(0.5);
    var btn_addMath = Co.game.make.sprite(-240, 0, 'addMath');
    btn_addMath.anchor.set(0.5);
    btn_addMath.scale.set(0.25);
    btn_addMath.alpha = 0.5;
    btn_addMath.kill();
    var btn_subMath = Co.game.make.sprite(-120, 0, 'subMath');
    btn_subMath.anchor.set(0.5);
    btn_subMath.scale.set(0.25);
    btn_subMath.alpha = 0.5;
    btn_subMath.kill();
    var btn_mulMath = Co.game.make.sprite(0, 0, 'mulMath');
    btn_mulMath.anchor.set(0.5);
    btn_mulMath.scale.set(0.25);
    btn_mulMath.alpha = 0.5;
    btn_mulMath.kill();
    var btn_divMath = Co.game.make.sprite(120, 0, 'divMath');
    btn_divMath.anchor.set(0.5);
    btn_divMath.scale.set(0.25);
    btn_divMath.alpha = 0.5;
    btn_divMath.kill();
    var btn_divPerMath = Co.game.make.sprite(240, 0, 'divPerMath');
    btn_divPerMath.anchor.set(0.5);
    btn_divPerMath.scale.set(0.25);
    btn_divPerMath.alpha = 0.5;
    btn_divPerMath.kill();
    var btn_addMathChoose = Co.game.make.sprite(-240, 0, 'addMathChoose');
    btn_addMathChoose.anchor.set(0.5);
    btn_addMathChoose.scale.set(0.25);
    btn_addMathChoose.kill();
    var btn_subMathChoose = Co.game.make.sprite(-120, 0, 'subMathChoose');
    btn_subMathChoose.anchor.set(0.5);
    btn_subMathChoose.scale.set(0.25);
    btn_subMathChoose.kill();
    var btn_mulMathChoose = Co.game.make.sprite(0, 0, 'mulMathChoose');
    btn_mulMathChoose.anchor.set(0.5);
    btn_mulMathChoose.scale.set(0.25);
    btn_mulMathChoose.kill();
    var btn_divMathChoose = Co.game.make.sprite(120, 0, 'divMathChoose');
    btn_divMathChoose.anchor.set(0.5);
    btn_divMathChoose.scale.set(0.25);
    btn_divMathChoose.kill();
    var btn_divPerMathChoose = Co.game.make.sprite(240, 0, 'divPerMathChoose');
    btn_divPerMathChoose.anchor.set(0.5);
    btn_divPerMathChoose.scale.set(0.25);
    btn_divPerMathChoose.kill();

    gui_pheptoan.addChild(btn_addMath);
    gui_pheptoan.addChild(btn_addMathChoose);
    gui_pheptoan.addChild(btn_subMath);
    gui_pheptoan.addChild(btn_subMathChoose);
    gui_pheptoan.addChild(btn_mulMath);
    gui_pheptoan.addChild(btn_mulMathChoose);
    gui_pheptoan.addChild(btn_divMath);
    gui_pheptoan.addChild(btn_divMathChoose);
    gui_pheptoan.addChild(btn_divPerMath);
    gui_pheptoan.addChild(btn_divPerMathChoose);

    if (Co.chooseAdd) btn_addMathChoose.revive();
    else btn_addMath.revive();
    if (Co.chooseSub) btn_subMathChoose.revive();
    else btn_subMath.revive();
    if (Co.chooseMul) btn_mulMathChoose.revive();
    else btn_mulMath.revive();
    if (Co.chooseDiv) btn_divMathChoose.revive();
    else btn_divMath.revive();
    if (Co.chooseDivPer) btn_divPerMathChoose.revive();
    else btn_divPerMath.revive();

    //TIMINGGG
    Co.timerBlue = Co.game.time.create();
    Co.timerRed = Co.game.time.create();
    Co.timerBlueEvent = Co.timerBlue.add(Phaser.Timer.MINUTE * 19 + Phaser.Timer.SECOND * 59, this.endTimerBlue, this);
    Co.timerRedEvent = Co.timerRed.add(Phaser.Timer.MINUTE * 19 + Phaser.Timer.SECOND * 59, this.endTimerRed, this);

    Co.game.physics.startSystem(Phaser.Physics.ARCADE);
    //win get
    Co.blueWin = false;
    Co.redWin = false;
    Co.deuceGame = false;
    // console.log(Co.chooseAdd, Co.chooseSub, Co.chooseMul, Co.chooseDiv, Co.chooseDivPer);
    //drawMap
    Co.chatBox = 0;
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
    Co.displayingUserBluePoint = Co.game.add.text(130, 1385, `${Co.userBluePoint} $`, {
      font: "30px Arial",
      fill: "yellow",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    Co.displayingUserRedPoint = Co.game.add.text(730, 1385, `${Co.userRedPoint} $`, {
      font: "30px Arial",
      fill: "yellow",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });

    //get point
    Co.pointBlueNow = 0;
    Co.pointBluePrev = 0;
    Co.pointRedNow = 0;
    Co.pointRedPrev = 0;
    Co.style = {
      font: "30px Arial",
      fill: "yellow",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };
    Co.style2 = {
      font: "30px Arial",
      fill: "#33cc33",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };
    Co.displayingPointBlue = Co.game.add.text(130, 1430, `${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, {
      font: "30px Arial",
      fill: "#0099ff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    Co.displayingPointRed = Co.game.add.text(730, 1430, `${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, {
      font: "30px Arial",
      fill: "#cc3300",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    Co.turnPlayer = Co.game.add.text(455, 1450, '', Co.style2);
    Co.turnPlayer.anchor.set(0.5);
    Co.game.add.text(480, 60, 'Xanh ăn: ', {
      font: "30px Arial",
      fill: "#0099ff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    Co.game.add.text(480, 110, 'Đỏ ăn: ', {
      font: "30px Arial",
      fill: "#cc3300",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    //render quân đã ăn
    Co.ateList = {
      blue: [],
      red: []
    };

    //button chat
    var btn_chat = Co.game.add.button(Co.game.world.centerX, Co.game.world.centerY + 650, 'btn_chat');
    btn_chat.anchor.set(0.5);
    var btn_chat2 = Co.game.add.button(Co.game.world.centerX, Co.game.world.centerY + 650, 'btn_chat');
    btn_chat2.anchor.set(0.5);
    btn_chat2.kill();
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
    var txt_roiban = Co.game.make.text(-200, -50, "Rời bàn sẽ bị xử thua luôn, \n bạn có chắc chắn rời bàn?", {
      font: "35px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
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
    popup_roiban.addChild(txt_roiban);
    btn_roiban.events.onInputDown.add(() => {
      Co.game.add.tween(popup_roiban.scale).to({
        x: 1,
        y: 1
      }, 1000, Phaser.Easing.Elastic.Out, true);
      Co.game.add.tween(popup_setting.scale).to({
        x: 0,
        y: 0
      }, 1000, Phaser.Easing.Linear.None, true);
    });
    btn_no_roiban.events.onInputDown.add(() => {
      Co.game.add.tween(popup_roiban.scale).to({
        x: 0,
        y: 0
      }, 350, Phaser.Easing.Linear.None, true);
    });
    btn_yes_roiban.events.onInputDown.add(() => {
      Co.game.add.tween(popup_roiban.scale).to({
        x: 0,
        y: 0
      }, 350, Phaser.Easing.Linear.None, true);

      // socket.emit("get_out", socket.id);
      // FB.ui()
      // console.log(Co.idBlue, Co.idRed);
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'get_out',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              if (Co.checkId === Co.idBlue) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.redWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
              if (Co.checkId === Co.idRed) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.blueWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'get_out',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              if (Co.checkId === Co.idBlue) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.redWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
              if (Co.checkId === Co.idRed) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.blueWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
            }
          }
        )
      }
    });
    //GUI cau hoa
    Co.deuceTime = 0;
    var txt_cauhoa = Co.game.make.text(-210, -50, "Bạn chỉ có thể cầu hòa 1 lần. \n Bạn có chắc chắn cầu hòa?", {
      font: "35px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
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
    popup_cauhoa.addChild(txt_cauhoa);

    btn_cauhoa.events.onInputDown.add(() => {
      Co.deuceTime += 1;
      if (Co.deuceTime == 1) {
        Co.game.add.tween(popup_cauhoa.scale).to({
          x: 1,
          y: 1
        }, 1000, Phaser.Easing.Elastic.Out, true);
        Co.game.add.tween(popup_setting.scale).to({
          x: 0,
          y: 0
        }, 1000, Phaser.Easing.Linear.None, true);
      } else {
        Co.cauhoa_text_limit_time = Co.game.add.text(Co.game.world.centerX - 200, Co.game.world.centerY - 50, "Bạn đã cầu hòa 1 lần rồi!", {
          font: "35px Arial",
          fill: "black",
          boundsAlignH: "center",
          boundsAlignV: "middle"
        });
        setTimeout(function () {
          Co.cauhoa_text_limit_time.destroy();
        }, 1200);
      }
    });
    btn_no_cauhoa.events.onInputDown.add(() => {
      Co.game.add.tween(popup_cauhoa.scale).to({
        x: 0,
        y: 0
      }, 350, Phaser.Easing.Linear.None, true);
    });
    btn_yes_cauhoa.events.onInputDown.add(() => {
      //socket
      // socket.emit("promise_deuce", socket.id);
      // FB.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'promise_deuce',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.game.add.tween(popup_cauhoa.scale).to({
                x: 0,
                y: 0
              }, 350, Phaser.Easing.Linear.None, true);
              Co.waiting = Co.game.add.text(Co.game.world.centerX - 220, Co.game.world.centerY - 50, "Đang chờ đối phương trả lời...", {
                font: "35px Arial",
                fill: "black",
                boundsAlignH: "center",
                boundsAlignV: "middle"
              });
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'promise_deuce',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.game.add.tween(popup_cauhoa.scale).to({
                x: 0,
                y: 0
              }, 350, Phaser.Easing.Linear.None, true);
              Co.waiting = Co.game.add.text(Co.game.world.centerX - 220, Co.game.world.centerY - 50, "Đang chờ đối phương trả lời...", {
                font: "35px Arial",
                fill: "black",
                boundsAlignH: "center",
                boundsAlignV: "middle"
              });
            }
          }
        )
      }
    });
    //GUI xin thua
    var txt_xinthua = Co.game.make.text(-200, -50, "Bạn có chắc chắn xin thua?", {
      font: "35px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
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
    popup_xinthua.addChild(txt_xinthua);

    btn_xinthua.events.onInputDown.add(() => {
      Co.game.add.tween(popup_xinthua.scale).to({
        x: 1,
        y: 1
      }, 1000, Phaser.Easing.Elastic.Out, true);
      Co.game.add.tween(popup_setting.scale).to({
        x: 0,
        y: 0
      }, 1000, Phaser.Easing.Linear.None, true);
    });
    btn_no_xinthua.events.onInputDown.add(() => {
      Co.game.add.tween(popup_xinthua.scale).to({
        x: 0,
        y: 0
      }, 350, Phaser.Easing.Linear.None, true);
    });
    btn_yes_xinthua.events.onInputDown.add(() => {
      Co.game.add.tween(popup_xinthua.scale).to({
        x: 0,
        y: 0
      }, 350, Phaser.Easing.Linear.None, true);
      // socket.emit("get_out", socket.id);
      // FB.ui()
      // console.log(Co.idBlue, Co.idRed);
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'choose_lose',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              if (Co.checkId === Co.idBlue) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã xin xử thua", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.redWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
              if (Co.checkId === Co.idRed) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã xin xử thua", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.blueWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'choose_lose',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              if (Co.checkId === Co.idBlue) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã xin xử thua", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.redWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
              if (Co.checkId === Co.idRed) {
                Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Bạn đã xin xử thua", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                Co.blueWin = true;
                setTimeout(function () {
                  Co.game.state.start('win');
                }, 1800);
              }
            }
          }
        )
      }
    })
    //text_tooltip
    Co.textTooltipBlue = Co.game.add.text(30, -120, "abcdefg", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle",
      wordWrap: true, wordWrapWidth: 200
    });
    // Co.textTootipBlue.anchor.set(0.5);
    Co.textTooltipRed = Co.game.add.text(30, -120, "abcdefasdg", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle",
      wordWrap: true, wordWrapWidth: 200
    });
    // Co.textTootipRed.anchor.set(0.5);
    //tooltip chat
    Co.tooltipBlue = Co.game.add.sprite(25, 1350, 'tooltip');
    Co.tooltipBlue.anchor.set(0, 1);
    Co.tooltipBlue.scale.set(0);
    Co.tooltipRed = Co.game.add.sprite(630, 1350, 'tooltip');
    Co.tooltipRed.anchor.set(0, 1);
    Co.tooltipRed.scale.set(0);

    Co.tooltipBlue.addChild(Co.textTooltipBlue);
    Co.tooltipRed.addChild(Co.textTooltipRed);
    //popup_chat
    var popup_chat = Co.game.add.sprite(Co.game.world.centerX + 130, Co.game.world.centerY + 300, 'gui_chat2');
    popup_chat.anchor.set(0.5);
    popup_chat.scale.set(0);
    popup_xinthua.inputEnabled = false;
    popup_xinthua.input.enableDrag();

    //popup in popup_chat
    var gui_chat1 = Co.game.make.sprite(0, -320, 'gui_chat1');
    gui_chat1.anchor.set(0.5);
    var btn_chatbox = Co.game.make.button(240, -325, 'btn_chatbox');
    btn_chatbox.anchor.set(0.5);
    var btn_chatnhanh = Co.game.make.button(0, -210, 'btn_chatnhanh');
    btn_chatnhanh.anchor.set(0.5);
    var btn_chatnhanh2 = Co.game.make.button(0, -130, 'btn_chatnhanh');
    btn_chatnhanh2.anchor.set(0.5);
    var btn_chatnhanh3 = Co.game.make.button(0, -50, 'btn_chatnhanh');
    btn_chatnhanh3.anchor.set(0.5);
    var btn_chatnhanh4 = Co.game.make.button(0, 30, 'btn_chatnhanh');
    btn_chatnhanh4.anchor.set(0.5);
    var btn_chatnhanh5 = Co.game.make.button(0, 110, 'btn_chatnhanh');
    btn_chatnhanh5.anchor.set(0.5);
    var btn_chatnhanh6 = Co.game.make.button(0, 190, 'btn_chatnhanh');
    btn_chatnhanh6.anchor.set(0.5);
    var txt_chatnhanh = Co.game.add.text(0, 0, "Nhanh nào!", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    txt_chatnhanh.anchor.set(0.5);
    var txt_chatnhanh2 = Co.game.add.text(0, 0, "Nước cờ hay đó", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    txt_chatnhanh2.anchor.set(0.5);
    var txt_chatnhanh3 = Co.game.add.text(0, 0, "Tuyệt vời!", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    txt_chatnhanh3.anchor.set(0.5);
    var txt_chatnhanh4 = Co.game.add.text(0, 0, "Sắp thua rồi", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    txt_chatnhanh4.anchor.set(0.5);
    var txt_chatnhanh5 = Co.game.add.text(0, 0, "Không dễ thế đâu", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    txt_chatnhanh5.anchor.set(0.5);
    var txt_chatnhanh6 = Co.game.add.text(0, 0, "Sắp thắng rồi", {
      font: "30px Arial",
      fill: "white",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    txt_chatnhanh6.anchor.set(0.5);

    btn_chatnhanh.addChild(txt_chatnhanh);
    btn_chatnhanh2.addChild(txt_chatnhanh2);
    btn_chatnhanh3.addChild(txt_chatnhanh3);
    btn_chatnhanh4.addChild(txt_chatnhanh4);
    btn_chatnhanh5.addChild(txt_chatnhanh5);
    btn_chatnhanh6.addChild(txt_chatnhanh6);

    popup_chat.addChild(gui_chat1);
    popup_chat.addChild(btn_chatbox);
    popup_chat.addChild(btn_chatnhanh);
    popup_chat.addChild(btn_chatnhanh2);
    popup_chat.addChild(btn_chatnhanh3);
    popup_chat.addChild(btn_chatnhanh4);
    popup_chat.addChild(btn_chatnhanh5);
    popup_chat.addChild(btn_chatnhanh6);
    //btn_chat
    btn_chat.events.onInputDown.add(() => {
      Co.chatBox = Co.game.add.tween(popup_chat.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
      Co.chatBox.start();
      btn_chat.kill();
      btn_chat2.revive();
      document.getElementById('box-chat').style.display = 'block';
    });
    btn_chat2.events.onInputDown.add(() => {
      Co.chatBox = Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
    });
    //btn chat box
    btn_chatbox.events.onInputDown.add(() => {
      if (document.getElementById('box-chat').value !== '') {
        var txt_chat = document.getElementById('box-chat').value;
        // console.log(document.getElementById('box-chat').value);
        // socket.emit("user_chat", document.getElementById('box-chat').value);
        //fb.ui()
        if (Co.checkId == Co.idBlue) {
          FB.ui(
            {
              method: 'apprequests',
              message: 'user_chat',
              to: Co.idRed,
              data: {
                id: Co.checkId,
                name: Co.nameFB,
                text: document.getElementById('box-chat').value
              }
            }, function (response) {
              console.log(response);
              if (response.error_message == undefined) {
                Co.textTooltipBlue.setText(txt_chat);
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
                setTimeout(function () {
                  Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
                }, 3000);
              }
            }
          )
        }
        if (Co.checkId == Co.idRed) {
          FB.ui(
            {
              method: 'apprequests',
              message: 'user_chat',
              to: Co.idBlue,
              data: {
                id: Co.checkId,
                name: Co.nameFB,
                text: document.getElementById('box-chat').value
              }
            }, function (response) {
              console.log(response);
              if (response.error_message == undefined) {
                Co.textTooltipRed.setText(txt_chat);
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
                setTimeout(function () {
                  Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
                }, 3000);
              }
            }
          )
        }
        document.getElementById('box-chat').style.display = 'none';
        Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
        btn_chat.revive();
        btn_chat2.kill();
        document.getElementById('box-chat').value = '';
      }
    });
    //click on chat nhanh
    btn_chatnhanh.events.onInputDown.add(() => {
      // socket.emit("user_chat", btn_chatnhanh.children[0]._text);
      //fb.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipBlue.setText(btn_chatnhanh.children[0]._text);
              Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipRed.setText(btn_chatnhanh.children[0]._text);
              Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      // Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
      // console.log(btn_chatnhanh.children[0]._text);
    });
    btn_chatnhanh2.events.onInputDown.add(() => {
      // socket.emit("user_chat", btn_chatnhanh2.children[0]._text);
      //fb.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh2.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipBlue.setText(btn_chatnhanh2.children[0]._text);
              Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh2.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipRed.setText(btn_chatnhanh2.children[0]._text);
              Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      // Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
      // console.log(btn_chatnhanh2.children[0]._text);
    });
    btn_chatnhanh3.events.onInputDown.add(() => {
      // socket.emit("user_chat", btn_chatnhanh3.children[0]._text);
      //fb.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh3.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipBlue.setText(btn_chatnhanh3.children[0]._text);
              Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh3.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipRed.setText(btn_chatnhanh3.children[0]._text);
              Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      // Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
      // console.log(btn_chatnhanh3.children[0]._text);
    });
    btn_chatnhanh4.events.onInputDown.add(() => {
      // socket.emit("user_chat", btn_chatnhanh4.children[0]._text);
      //fb.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh4.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipBlue.setText(btn_chatnhanh4.children[0]._text);
              Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh4.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipRed.setText(btn_chatnhanh4.children[0]._text);
              Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      // Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
      // console.log(btn_chatnhanh4.children[0]._text);
    });
    btn_chatnhanh5.events.onInputDown.add(() => {
      // socket.emit("user_chat", btn_chatnhanh5.children[0]._text);
      //fb.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh5.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipBlue.setText(btn_chatnhanh5.children[0]._text);
              Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh5.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipRed.setText(btn_chatnhanh5.children[0]._text);
              Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      // Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
      // console.log(btn_chatnhanh5.children[0]._text);
    });
    btn_chatnhanh6.events.onInputDown.add(() => {
      // socket.emit("user_chat", btn_chatnhanh6.children[0]._text);
      //fb.ui()
      if (Co.checkId == Co.idBlue) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idRed,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh6.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipBlue.setText(btn_chatnhanh6.children[0]._text);
              Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      if (Co.checkId == Co.idRed) {
        FB.ui(
          {
            method: 'apprequests',
            message: 'user_chat',
            to: Co.idBlue,
            data: {
              id: Co.checkId,
              name: Co.nameFB,
              text: btn_chatnhanh6.children[0]._text
            }
          }, function (response) {
            console.log(response);
            if (response.error_message == undefined) {
              Co.textTooltipRed.setText(btn_chatnhanh6.children[0]._text);
              Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
              setTimeout(function () {
                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
              }, 3000);
            }
          }
        )
      }
      Co.game.add.tween(popup_chat.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Elastic.Out, true);
      // Co.chatBox.start();
      btn_chat.revive();
      btn_chat2.kill();
      document.getElementById('box-chat').style.display = 'none';
      // console.log(btn_chatnhanh6.children[0]._text);
    });
    // console.log(list_chatnhanh[i].children[0]._text);
    // console.log(list_chatnhanh);
    //Text chỉ bên
    if (Co.checkId == Co.idRed) Co.game.add.text(100, 100, "Bạn quân ĐỎ", {
      font: "30px Arial",
      fill: "#cc3300",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    if (Co.checkId == Co.idBlue) Co.game.add.text(100, 100, "Bạn quân XANH", {
      font: "30px Arial",
      fill: "#0099ff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    });
    //popup setting ingame
    var btn_caidat = Co.game.add.button(50, 100, 'caidat', openPopup, this);
    btn_caidat.anchor.set(0.5);
    btn_caidat.input.useHandCursor = true;
    var popup_setting = Co.game.add.sprite(200, 200, 'gui_setting');
    popup_setting.alpha = 1;
    popup_setting.anchor.set(0.5);
    popup_setting.inputEnabled = true;
    // popup_setting.input.enableDrag();
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
      tween = Co.game.add.tween(popup_setting.scale).to({
        x: 0.5,
        y: 0.5
      }, 1000, Phaser.Easing.Elastic.Out, true);
    };

    function closePopup() {
      if (tween && tween.isRunning || popup_setting.scale.x === 0.1) {
        return;
      }
      tween = Co.game.add.tween(popup_setting.scale).to({
        x: 0,
        y: 0
      }, 500, Phaser.Easing.Elastic.In, true);
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
      var diemcong = Co.game.add.text(170, 1390, '+100', {
        font: "30px Arial",
        fill: "#cc3300",
        boundsAlignH: "center",
        boundsAlignV: "middle"
      });
      Co.userBluePoint += 100;
      var bg_trudiem = Co.game.add.sprite(720, 1385, 'bg_trudiem');
      var diemtru = Co.game.add.text(770, 1390, '-100', {
        font: "30px Arial",
        fill: "yellow",
        boundsAlignH: "center",
        boundsAlignV: "middle"
      });
      Co.userRedPoint -= 100;
      Co.game.add.tween(bg_congdiem).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.game.add.tween(diemcong).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.game.add.tween(bg_trudiem).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.game.add.tween(diemtru).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.displayingUserBluePoint.setText(`${Co.userBluePoint} $`);
      Co.displayingUserRedPoint.setText(`${Co.userRedPoint} $`);
    }
    if (Co.pointRedNow !== Co.pointRedPrev) {
      // console.log(Co.ateList[0].sprite.__proto__.revive());
      Co.pointRedPrev = Co.pointRedNow;
      Co.displayingPointRed.setText(`${Co.pointRedPrev}/${Co.configs.WIN_POINT}`);
      //create add and sub point user
      var bg_congdiem = Co.game.add.sprite(720, 1385, 'bg_congdiem');
      var diemcong = Co.game.add.text(770, 1390, '+100', {
        font: "30px Arial",
        fill: "#cc3300",
        boundsAlignH: "center",
        boundsAlignV: "middle"
      });
      Co.userRedPoint += 100;
      var bg_trudiem = Co.game.add.sprite(120, 1385, 'bg_trudiem');
      var diemtru = Co.game.add.text(170, 1390, '-100', {
        font: "30px Arial",
        fill: "yellow",
        boundsAlignH: "center",
        boundsAlignV: "middle"
      });
      Co.userBluePoint -= 100;
      Co.game.add.tween(bg_congdiem).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.game.add.tween(diemcong).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.game.add.tween(bg_trudiem).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
      Co.game.add.tween(diemtru).to({
        alpha: 0
      }, 3000, Phaser.Easing.Linear.None, true);
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
        Co.ateList.blue[item].sprite.inputEnabled = false;
        Co.ateList.blue[item].sprite.scale.x = 0.5;
        Co.ateList.blue[item].sprite.scale.y = 0.5;
        Co.ateList.blue[item].sprite.revive();
      }
    }
    if (Co.ateList.red.length > 0) {
      for (item in Co.ateList.red) {
        Co.ateList.red[item].sprite.position.x = 650 + item * 30;
        Co.ateList.red[item].sprite.position.y = 120;
        Co.ateList.red[item].sprite.inputEnabled = false;
        Co.ateList.red[item].sprite.scale.x = 0.5;
        Co.ateList.red[item].sprite.scale.y = 0.5;
        Co.ateList.red[item].sprite.revive();
      }
    }
    var font;
    if (Co.timerBlue.running) {
      font = Co.game.debug.text(this.formatTime(Math.round((Co.timerBlueEvent.delay - Co.timerBlue.ms) / 1000)), 140, 1350, "#000");
    } else {
      Co.game.debug.text("Hết giờ!", 140, 1350, "#B20044");
      //socket
      socket.emit("timeout_blue", "blue");
    }
    if (Co.timerRed.running) {
      Co.game.debug.text(this.formatTime(Math.round((Co.timerRedEvent.delay - Co.timerRed.ms) / 1000)), 740, 1350, "#000");
    } else {
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
          case 1:
            {
              Co.chesses.push(new chess1Blue(j, i));
              break;
            }
          case 2:
            {
              Co.chesses.push(new chess2Blue(j, i));
              break;
            }
          case 3:
            {
              Co.chesses.push(new chess3Blue(j, i));
              break;
            }
          case 4:
            {
              Co.chesses.push(new chess4Blue(j, i));
              break;
            }
          case 5:
            {
              Co.chesses.push(new chess5Blue(j, i));
              break;
            }
          case 6:
            {
              Co.chesses.push(new chess6Blue(j, i));
              break;
            }
          case 7:
            {
              Co.chesses.push(new chess7Blue(j, i));
              break;
            }
          case 8:
            {
              Co.chesses.push(new chess8Blue(j, i));
              break;
            }
          case 9:
            {
              Co.chesses.push(new chess9Blue(j, i));
              break;
            }
          case 10:
            {
              Co.chesses.push(new chess10Blue(j, i));
              break;
            }
          case 100:
            {
              Co.chesses.push(new chess10Red(j, i));
              break;
            }
          case 99:
            {
              Co.chesses.push(new chess9Red(j, i));
              break;
            }
          case 98:
            {
              Co.chesses.push(new chess8Red(j, i));
              break;
            }
          case 97:
            {
              Co.chesses.push(new chess7Red(j, i));
              break;
            }
          case 96:
            {
              Co.chesses.push(new chess6Red(j, i));
              break;
            }
          case 95:
            {
              Co.chesses.push(new chess5Red(j, i));
              break;
            }
          case 94:
            {
              Co.chesses.push(new chess4Red(j, i));
              break;
            }
          case 93:
            {
              Co.chesses.push(new chess3Red(j, i));
              break;
            }
          case 92:
            {
              Co.chesses.push(new chess2Red(j, i));
              break;
            }
          case 91:
            {
              Co.chesses.push(new chess1Red(j, i));
              break;
            }
          default:
            {
              break;
            }
        }
      }
    }
  }

}
