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
        Co.game.load.image('txt_amthanh', 'Assets/Setting/Text_Amthanh.png');
        Co.game.load.image('txt_rung', 'Assets/Setting/Text_Rung.png');
        Co.game.load.image('gui_BG', 'Assets/Setting/GUiBG2.png');
        Co.game.load.image('bg', 'Assets/Loading/BG.png'); 
        Co.game.load.image('check', 'Assets/Setting/Chon.png');    
        Co.game.load.image('uncheck', 'Assets/Setting/Khongchon.png');           
    },
    create: function () {
        var tween = null;
        var tween_mini1 = null;
        var tween_mini2 = null;
        var checkPlay = false;
        var drawBoard = false;
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, this.drawBoard);
        var bg = Co.game.add.sprite(0, 0, 'bg');
        //ten game
        var tengame = Co.game.add.sprite(Co.game.world.centerX - 300,Co.game.world.centerY - 300, 'tengame');
        //btn batdau
        var btn_batdau = Co.game.add.button(Co.game.world.centerX - 205, Co.game.world.centerY, 'batdau', function(){
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
        //text_cai_dat
        var txt_caidat = Co.game.make.sprite(-135, -255, 'txt_caidat');
        //btn huong dan
        var btn_huongdan = Co.game.make.sprite(-200, 70, 'btn_huongdan');
        btn_huongdan.inputEnabled = true;
        btn_huongdan.input.priorityID = 2;
        btn_huongdan.input.useHandCursor = true;
        btn_huongdan.events.onInputDown.add(()=>{
            console.log("tutorial");
        },this);
        //btn thoat game
        var btn_thoatgame = Co.game.make.sprite(-200, 160, 'btn_thoatgame');
        btn_thoatgame.inputEnabled = true;
        btn_thoatgame.input.priorityID = 3;
        btn_thoatgame.input.useHandCursor = true;
        btn_thoatgame.events.onInputDown.add(()=>{
            console.log("exit");
        },this);
        //txt am thanh va rung
        var txt_amthanh = Co.game.make.sprite(-100, -130, 'txt_amthanh');
        var txt_rung = Co.game.make.sprite(-100, -40, 'txt_rung');
        //Check icon
        var check_amthanh = Co.game.make.button(-150, -110, 'check', uncheckSound, this);
        check_amthanh.scale.set(1);
        check_amthanh.anchor.set(0.5);
        var check_rung = Co.game.make.button(-150, -20, 'check', uncheckVibrate);
        check_rung.scale.set(1);
        check_rung.anchor.set(0.5);
        var uncheck_amthanh = Co.game.make.button(-150, -110, 'uncheck', checkSound);
        uncheck_amthanh.scale.set(0);
        uncheck_amthanh.anchor.set(0.5);
        var uncheck_rung = Co.game.make.button(-150, -20, 'uncheck', checkVibrate);
        uncheck_rung.scale.set(0);
        uncheck_rung.anchor.set(0.5);

        popup.addChild(btn_thoat);
        popup.addChild(txt_caidat);
        popup.addChild(btn_huongdan);
        popup.addChild(btn_thoatgame);
        popup.addChild(txt_amthanh);
        popup.addChild(txt_rung);
        popup.addChild(check_amthanh);
        popup.addChild(check_rung);
        popup.addChild(uncheck_amthanh);
        popup.addChild(uncheck_rung);
        popup.scale.set(0);

        function uncheckSound(){
            tween_mini1 = Co.game.add.tween(uncheck_amthanh.scale).to({x:1, y:1}, 1000, Phaser.Easing.Elastic.Out, true);
            tween_mini2 = Co.game.add.tween(check_amthanh.scale).to({x:0, y:0}, 1000, Phaser.Easing.Elastic.Out, true);
        }

        function uncheckVibrate(){
            tween_mini1 = Co.game.add.tween(uncheck_rung.scale).to({x:1, y:1}, 1000, Phaser.Easing.Elastic.Out, true);
            tween_mini2 = Co.game.add.tween(check_rung.scale).to({x:0, y:0}, 1000, Phaser.Easing.Elastic.Out, true);
        }

        function checkSound(){
            tween_mini1 = Co.game.add.tween(uncheck_amthanh.scale).to({x:0, y:0}, 1000, Phaser.Easing.Elastic.Out, true);
            tween_mini2 = Co.game.add.tween(check_amthanh.scale).to({x:1, y:1}, 1000, Phaser.Easing.Elastic.Out, true);
        }
            
        function checkVibrate(){
            tween_mini1 = Co.game.add.tween(uncheck_rung.scale).to({x:0, y:0}, 1000, Phaser.Easing.Elastic.Out, true);
            tween_mini2 = Co.game.add.tween(check_rung.scale).to({x:1, y:1}, 1000, Phaser.Easing.Elastic.Out, true);
        }

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