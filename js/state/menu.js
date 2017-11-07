var menuState = {
    preload: function () {
        Co.game.load.image('background','Assets/Bandau/Banco.png');
        Co.game.load.image('oden', 'Assets/Bandau/oden.png');
        Co.game.load.image('otrang', 'Assets/Bandau/otrang.png');
        Co.game.load.image('otuong', 'Assets/Bandau/otuong.png');
        Co.game.load.image('batdau', 'Assets/Bandau/Button_batdau.png');
        Co.game.load.image('caidat', 'Assets/Loading/Button_setting.png');
        Co.game.load.image('btn_back', 'Assets/Setting/Button_back.png');
        Co.game.load.image('btn_dongy', 'Assets/Setting/Button_Dongy.png');
        Co.game.load.image('btn_huongdan', 'Assets/Setting/Button_Huongdan.png');
        Co.game.load.image('btn_huy', 'Assets/Setting/Button_huy.png');
        Co.game.load.image('btn_thoat', 'Assets/Setting/Button_Thoat.png');
        Co.game.load.image('btn_thoatgame', 'Assets/Setting/Button_Thoatgame.png');
        Co.game.load.image('txt_caidat', 'Assets/Setting/Text_Caidat.png');
        Co.game.load.image('txt_huongdan', 'Assets/Setting/Text_Huongdanchoi.png');
        Co.game.load.image('gui_BG', 'Assets/Setting/GUiBG2.png');
        Co.game.load.image('bg', 'Assets/Loading/BG.png');        
    },
    create: function () {
        var tween = null;
        var checkPlay = false;
        var drawBoard = false;
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, this.drawBoard);
        var bg = Co.game.add.sprite(0, 0, 'bg');
        var btn_batdau = Co.game.add.button(Co.game.world.centerX - 205, Co.game.world.centerY - 62, 'batdau', function(){
            checkPlay = true;
            btn_batdau.pendingDestroy = true;
            this.start();
        }, this);
        
        //nut Setting
        var btn_setting = Co.game.add.button(815, 20, 'caidat', openPopup, this);
        btn_setting.input.useHandCursor = true;

        var popup = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'gui_BG');
        popup.alpha = 1;
        popup.anchor.set(0.5);
        popup.inputEnabled = true;
        popup.input.enableDrag();
        // nut thoat
        var btn_thoat = Co.game.make.sprite(240, -255, 'btn_thoat');
        btn_thoat.inputEnabled = true;
        btn_thoat.input.priorityID = 1;
        btn_thoat.input.useHandCursor = true;
        btn_thoat.events.onInputDown.add(closePopup, this);

        // var ;

        popup.addChild(btn_thoat);
        popup.scale.set(0);

        function openPopup(){
            if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
            {
                return;
            } 
            tween = Co.game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);           
        };
        function closePopup(){
            if (tween && tween.isRunning || popup.scale.x === 0.1)
            {
                return;
            }
            tween = Co.game.add.tween(popup.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
        };
    },
    start: function(){
        Co.game.state.start('play');
    },
    drawBoardDefault: function (boardArr, drawBoard) {
        for (i = 0; i < boardArr.length; i++) {
            for (j = 0; j < boardArr[i].length; j++) {
                if (boardArr[i][j] === 1) {
                    Co.game.add.sprite(j * 100, i * 100, 'oden');
                } else if (boardArr[i][j] === 2) {
                    Co.game.add.sprite(j * 100, i * 100, 'otrang');
                } else if (boardArr[i][j] === 3) {
                    Co.game.add.sprite(j * 100, i * 100, 'otuong');
                }
            }
        }
        return drawBoard = true;
    }
}