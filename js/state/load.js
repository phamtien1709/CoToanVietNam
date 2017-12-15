var loadState = {
    preload: function(){
        Co.game.time.advancedTiming = true;
        Co.game.input.maxPointers = 1;
        Co.game.stage.disableVisibilityChange = true;

        Co.game.scale.minWidth = 450;
        Co.game.scale.minHeight = 550;
        Co.game.scale.maxWidth = 900;
        Co.game.scale.maxHeight = 1100;
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
    create: function(){
        var bg = Co.game.add.sprite(0, 0, 'bg');
        Co.tengame = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY-300, 'tengame');
        Co.tengame.anchor = new Phaser.Point(0.5,0.5);
        var quanCoTo = Co.game.add.sprite(Co.game.world.centerX,Co.game.world.centerY,'quancoto');
        quanCoTo.anchor.set(0.5);
        //btn login fb
        var btn_fb = Co.game.add.button(Co.game.world.centerX, Co.game.world.centerY + 550,"btn_fb", function(){
            FB.login();
        });
        btn_fb.anchor.set(0.5);
        var txt_loading = Co.game.add.sprite(Co.game.world.centerX,Co.game.world.centerY+150, 'text_loading')
        txt_loading.anchor.set(0.5);
        Co.checkPlay = 0;
        Co.firstMoveBlue = false;
        Co.firstMoveRed = false;
        Co.idFBBlue = 0;
        Co.idFBRed = 0;
    },
    update: function(){
        checkLoginState();
        Co.checkPlay += 1;
        if ((Co.checkPlay === 90)){
            this.start();
        }
    },
    start: function(){
        Co.game.state.start('menu');
    }
};
