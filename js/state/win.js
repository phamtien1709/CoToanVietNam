var winState = {
    preload: function () {
        Co.game.load.image('win_img', 'Assets/Bandau/Eff_Thang.png');
        Co.game.load.image('lose_img', 'Assets/Bandau/Eff_Thua.png');
        Co.game.load.image('winBlue', 'Assets/Bandau/coxanh10.png');
        Co.game.load.image('winRed', 'Assets/Bandau/codo10.png');
        Co.game.load.image('deuce_img', 'Assets/Bandau/Eff_hoa.png');
        Co.game.load.image('btn_replay', 'Assets/Bandau/button_replay.png');
    },
    create: function () {
        // console.log(Co.pointFinishToPush);
        Co.checkPlay = false;
        document.getElementById('box-chat').style.display = 'none';
        Co.tweenLose = 0;
        Co.tweenWin = 0;
        Co.tweenDeuce = 0;
        //fb api
        FB.api(
            '/me/scores',
            'post',
            { score: Co.pointFinishToPush + Co.userPointStorage },
            function (response) {
                console.log(response);
                Co.userPointStorage += Co.pointFinishToPush;
            });
        var win_img = 0;
        var lose_img = 0;
        var deuce_img = 0;
        var bg = Co.game.add.sprite(0, 0, 'bg');
        win_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY - 100, 'win_img');
        win_img.anchor.set(0.5);
        win_img.scale.set(0);
        lose_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY - 100, 'lose_img');
        lose_img.anchor.set(0.5);
        lose_img.scale.set(0);
        deuce_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY - 100, 'deuce_img');
        deuce_img.anchor.set(0.5);
        deuce_img.scale.set(0);
        Co.win_txt_waiting = Co.game.add.text(Co.game.world.centerX - 150, 900 + Co.configs.HEAD_HEIGHT, "Waiting for new game...", { font: "30px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.win_txt_waiting.kill();
        if (Co.deuceGame) {
            Co.game.add.tween(deuce_img.scale).to({ x: 1.3, y: 1.3 }, 600, Phaser.Easing.Quadratic.InOut, true);
            var txt_deuce_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, "Bạn mất 0$", { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
            txt_deuce_point.anchor.set(0.5);
            txt_deuce_point.scale.set(0);
            Co.tweenDeuce = Co.game.add.tween(txt_deuce_point.scale).to({ x: 1, y: 1 }, 600, Phaser.Easing.Quadratic.InOut, true);
            Co.tweenDeuce.start();
            Co.tweenDeuce = Co.game.add.tween(txt_deuce_point).to({ x: -100, y: -100 }, 800, "Quart.easeOut");
            setTimeout(function () {
                Co.tweenDeuce.start();
            }, 1500);
        } else {
            if (Co.blueWin) {
                if (Co.checkId == Co.idBlue) {
                    Co.game.add.tween(win_img.scale).to({ x: 1.3, y: 1.3 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_win_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, `Bạn thắng ${Co.pointFinishToPush}$`, { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_win_point.anchor.set(0.5);
                    txt_win_point.scale.set(0);
                    Co.tweenWin = Co.game.add.tween(txt_win_point.scale).to({ x: 1, y: 1 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenWin.start();
                    Co.tweenWin = Co.game.add.tween(txt_win_point).to({ x: -100, y: -100 }, 800, "Quart.easeOut");
                    setTimeout(function () {
                        Co.tweenWin.start();
                    }, 1500);
                }
                if (Co.checkId == Co.idRed) {
                    Co.game.add.tween(lose_img.scale).to({ x: 1.3, y: 1.3 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_lose_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, `Bạn bị trừ ${Co.pointFinishToPush}$`, { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_lose_point.anchor.set(0.5);
                    txt_lose_point.scale.set(0);
                    Co.tweenLose = Co.game.add.tween(txt_lose_point.scale).to({ x: 1, y: 1 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenLose.start();
                    Co.tweenLose = Co.game.add.tween(txt_lose_point).to({ x: -100, y: -100 }, 800, "Quart.easeOut");
                    setTimeout(function () {
                        Co.tweenLose.start();
                    }, 1500);
                }
            }
            if (Co.redWin) {
                if (Co.checkId == Co.idBlue) {
                    Co.game.add.tween(lose_img.scale).to({ x: 1.3, y: 1.3 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_lose_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, `Bạn bị trừ ${Co.pointFinishToPush}$`, { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_lose_point.anchor.set(0.5);
                    txt_lose_point.scale.set(0);
                    Co.tweenLose = Co.game.add.tween(txt_lose_point.scale).to({ x: 1, y: 1 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenLose.start();
                    Co.tweenLose = Co.game.add.tween(txt_lose_point).to({ x: -100, y: -100 }, 800, "Quart.easeOut");
                    setTimeout(function () {
                        Co.tweenLose.start();
                    }, 1500);
                }
                if (Co.checkId == Co.idRed) {
                    Co.game.add.tween(win_img.scale).to({ x: 1.3, y: 1.3 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_win_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, `Bạn thắng ${Co.pointFinishToPush}$`, { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_win_point.anchor.set(0.5);
                    txt_win_point.scale.set(0);
                    Co.tweenWin = Co.game.add.tween(txt_win_point.scale).to({ x: 1, y: 1 }, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenWin.start();
                    Co.tweenWin = Co.game.add.tween(txt_win_point).to({ x: -100, y: -100 }, 800, "Quart.easeOut");
                    setTimeout(function () {
                        Co.tweenWin.start();
                    }, 1500);
                }
            }
        }
        Co.win_btn_replay = Co.game.add.sprite(Co.game.world.centerX, 900 + Co.configs.HEAD_HEIGHT, 'btn_replay');
        Co.win_btn_replay.anchor.set(0.5);
        Co.win_btn_replay.scale.set(0.6);
        Co.win_btn_replay.inputEnabled = true;
        Co.win_btn_replay.input.priorityID = 3;
        Co.win_btn_replay.input.useHandCursor = true;
        Co.win_btn_replay.events.onInputDown.add(() => {
            // Co.game.state.start('menu');
            // FB.ui()
            // console.log(Co.idBlue, Co.idRed);
            if (Co.checkId == Co.idBlue) {
                FB.ui(
                    {
                        method: 'apprequests',
                        message: 'replay_request',
                        to: Co.idRed,
                        data: {
                            id: Co.checkId,
                            name: Co.nameFB,
                            math: [Co.chooseAdd, Co.chooseSub, Co.chooseMul, Co.chooseDiv, Co.chooseDivPer]
                        }
                    }, function (response) {
                        console.log(response);
                        if (response.error_message == undefined) {
                            Co.win_btn_replay.kill();
                            Co.win_txt_waiting.revive();
                        }
                    }
                )
            }
            if (Co.checkId == Co.idRed) {
                FB.ui(
                    {
                        method: 'apprequests',
                        message: 'replay_request',
                        to: Co.idBlue,
                        data: {
                            id: Co.checkId,
                            name: Co.nameFB,
                            math: [Co.chooseAdd, Co.chooseSub, Co.chooseMul, Co.chooseDiv, Co.chooseDivPer]
                        }
                    }, function (response) {
                        console.log(response);
                        if (response.error_message == undefined) {
                            Co.win_btn_replay.kill();
                            Co.win_txt_waiting.revive();
                        }
                    }
                )
            }
        }, this);
        var btn_thoatgame = Co.game.add.sprite(Co.game.world.centerX, 1050 + Co.configs.HEAD_HEIGHT, 'btn_thoatgame');
        btn_thoatgame.anchor.set(0.5);
        btn_thoatgame.inputEnabled = true;
        btn_thoatgame.input.priorityID = 3;
        btn_thoatgame.input.useHandCursor = true;
        btn_thoatgame.events.onInputDown.add(() => {
            Co.game.state.start('load');
        }, this);
        // console.log(Co.checkId);
    },
    update: function () {

    },
    render: function () {

    }
}
