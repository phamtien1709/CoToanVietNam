var loadState = {
    preload: function () {
        Co.game.time.advancedTiming = true;
        Co.game.input.maxPointers = 1;
        Co.game.stage.disableVisibilityChange = true;
        // Co.game.scale.minWidth = 450;
        // Co.game.scale.minHeight = 550;
        // Co.game.scale.maxWidth = 900;
        // Co.game.scale.maxHeight = 1100;
        Co.game.scale.pageAlignHorizontally = true;
        Co.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        Co.game.load.image('tengame', 'Assets/Loading/tengame.png');
        Co.game.load.image('gui_BG', 'Assets/Setting/GUiBG2.png');
        Co.game.load.image('bg', 'Assets/Loading/BG.png');
        Co.game.load.image('red10', 'Assets/Bandau/codo10.png');
        Co.game.load.image('red9', 'Assets/Bandau/codo9.png');
        Co.game.load.image('red8', 'Assets/Bandau/codo8.png');
        Co.game.load.image('red7', 'Assets/Bandau/codo7.png');
        Co.game.load.image('red6', 'Assets/Bandau/codo6.png');
        Co.game.load.image('red5', 'Assets/Bandau/codo5.png');
        Co.game.load.image('red4', 'Assets/Bandau/codo4.png');
        Co.game.load.image('red3', 'Assets/Bandau/codo3.png');
        Co.game.load.image('red2', 'Assets/Bandau/codo2.png');
        Co.game.load.image('red1', 'Assets/Bandau/codo1.png');
        Co.game.load.image('blue10', 'Assets/Bandau/coxanh10.png');
        Co.game.load.image('blue9', 'Assets/Bandau/coxanh9.png');
        Co.game.load.image('blue8', 'Assets/Bandau/coxanh8.png');
        Co.game.load.image('blue7', 'Assets/Bandau/coxanh7.png');
        Co.game.load.image('blue6', 'Assets/Bandau/coxanh6.png');
        Co.game.load.image('blue5', 'Assets/Bandau/coxanh5.png');
        Co.game.load.image('blue4', 'Assets/Bandau/coxanh4.png');
        Co.game.load.image('blue3', 'Assets/Bandau/coxanh3.png');
        Co.game.load.image('blue2', 'Assets/Bandau/coxanh2.png');
        Co.game.load.image('blue1', 'Assets/Bandau/coxanh1.png');
        Co.game.load.image('chonco', 'Assets/Bandau/Chonco.png');
        Co.game.load.image('huongdi', 'Assets/Bandau/huongdi.png');
        Co.game.load.image('quancoto', 'Assets/Loading/quanCoTo.png');
        Co.game.load.image('text_loading', 'Assets/Loading/text_loading.png');
        Co.game.load.image('oAnDuoc', 'Assets/Bandau/Quancothean.png');
        Co.game.load.image('btn_fb', 'Assets/Loading/Button_FB.png');
        Co.game.load.image('addMath', 'Assets/Loading/addMath.png');
        Co.game.load.image('addMathChoose', 'Assets/Loading/addMathChoose.png');
        Co.game.load.image('subMath', 'Assets/Loading/subMath.png');
        Co.game.load.image('subMathChoose', 'Assets/Loading/subMathChoose.png');
        Co.game.load.image('mulMath', 'Assets/Loading/mulMath.png');
        Co.game.load.image('mulMathChoose', 'Assets/Loading/mulMathChoose.png');
        Co.game.load.image('divMath', 'Assets/Loading/divMath.png');
        Co.game.load.image('divMathChoose', 'Assets/Loading/divMathChoose.png');
        Co.game.load.image('divPerMath', 'Assets/Loading/divPerMath.png');
        Co.game.load.image('divPerMathChoose', 'Assets/Loading/divPerMathChoose.png');
        Co.game.load.image('btn_chonpheptoan', 'Assets/Loading/btn_chonpheptoan.png');
        Co.game.load.image('GUIchonpheptoan', 'Assets/Loading/GUInguoichoi.png');
    },
    create: function () {
        var bg = Co.game.add.sprite(0, 0, 'bg');
        Co.tengame = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY - 300, 'tengame');
        Co.tengame.anchor = new Phaser.Point(0.5, 0.5);
        var quanCoTo = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'quancoto');
        quanCoTo.anchor.set(0.5);
        Co.checkPlayTime = false;
        // Co.checkCallbackLogin = false;
        Co.checkTimeState = 0;
        //btn login fb
        Co.btn_FB = Co.game.add.button(Co.game.world.centerX, Co.game.world.centerY + 550, "btn_fb", function () {
            FB.login(function (response) {
                //handle
                // console.log(response.status);
                if (response.status == 'unknown') {
                    alert("Đăng nhập lỗi, hãy đăng nhập lại! :'(");
                }
                if (response.status == 'connected') {
                    Co.checkPlayTime = true;
                    // FB.api(
                    //     '/me/scores',
                    //     'delete',
                    //     function (response) {
                    //         console.log(response);
                    //     });
                    FB.api(
                        '/me/scores',
                        'get',
                        function (response) {
                            // console.log(response.data[0]);
                            if (response.data[0] == undefined) {
                                FB.api(
                                    '/me/scores',
                                    'post',
                                    { score: 5000 },
                                    function (response) {
                                        console.log(response);
                                        Co.game.state.start('load');
                                    });
                            } else {
                                Co.game.state.start('load');
                            }
                        }
                    );

                }
            }, {
                    scope: 'user_friends,email,public_profile,publish_actions'
                });
        });
        Co.btn_FB.anchor.set(0.5);
        checkLoginState();
        var txt_loading = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY + 150, 'text_loading')
        txt_loading.anchor.set(0.5);
        Co.firstMoveBlue = false;
        Co.firstMoveRed = false;
        Co.idFBBlue = 0;
        Co.idFBRed = 0;
    },
    update: function () {
        // Co.checkPlayTime += 1;
        if (Co.checkCallbackLogin) {
            Co.btn_FB.kill();
        }
        if ((Co.checkPlayTime) || (Co.checkCallbackLogin)) {
            Co.checkTimeState += 1;
            if (Co.checkTimeState == 300) {
                this.start();
            }
        }
    },
    start: function () {
        Co.game.state.start('menu');
    }
};
