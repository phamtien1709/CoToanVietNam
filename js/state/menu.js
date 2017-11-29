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
        Co.game.load.image('gui_tut', 'Assets/Setting/Gui_huongdan.png');   
        Co.game.load.image('bg_black', 'Assets/Bandau/BG_Black.png');  
        Co.game.load.image('ava_fb', `https://graph.facebook.com/${Co.checkId}/picture?width=100`);      
    },
    create: function () {
        Co.idBlue = 0;
        Co.idRed= 0;
        var tween = null;
        var tween_mini1 = null;
        var tween_mini2 = null;
        var checkPlay = false;
        var ok = 0;
        var drawBoard = false;
        // this.drawBoardDefault(Co.configs.BOARD_DEFAULT, this.drawBoard);
        var bg = Co.game.add.sprite(0, 0, 'bg');
        //ten game
        var tengame = Co.game.add.sprite(Co.game.world.centerX - 300,Co.game.world.centerY - 300, 'tengame');
        //btn batdau
        var btn_batdau = Co.game.add.button(Co.game.world.centerX, Co.game.world.centerY, 'batdau', function(){
            checkPlay = true;
            btn_batdau.pendingDestroy = true;
            Co.game.add.text(Co.game.world.centerX - 140, Co.game.world.centerY - 50, "Waiting for a player...");
            //socket
            socket.emit("start", {
                join : 1
            });
            socket.on("server-send-data", (data)=>{
                ok = data;
                this.start(ok);
            })
        }, this);
        btn_batdau.anchor.set(0.5);
        //ava fb
        Co.game.add.sprite(15, 15, 'ava_fb');
        //nut Setting
        var btn_setting = Co.game.add.button(815, 20, 'caidat', openPopup, this);
        btn_setting.input.useHandCursor = true;

        var popup = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'bg_black');
        popup.alpha = 1;
        popup.anchor.set(0.5);
        popup.inputEnabled = true;
        // popup.input.enableDrag();
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
            var run_tut = null;
            if ((run_tut !== null && run_tut.isRunning) || popup_tut.scale.x === 1)
            {
                return;
            } 
            run_tut = Co.game.add.tween(popup_tut.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);           
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
        var gui_setting = Co.game.make.sprite(0,0, 'gui_BG');
        // gui_setting.scale.set(0);
        gui_setting.anchor.set(0.5);

        popup.addChild(gui_setting);
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


        var text_tuts = [
            'Cách đi quân:',
            'Quân số "0" không được di chuyển những quân còn lại đều ',
            'được đi thẳng theo 4 hướng tiến, lùi, trái, phải và 4   ',
            'phương chéo Đông, Tây, Nam, Bắc.                        ',
            'Số bước đi thực hiện theo trị số riêng của từng quân cờ.',
            'Những quân có trị số nhiều có thể đi nhiều hơn.         ',
            'Cách bắt quân:',
            'Muốn bắt quân đối phương phải có 2 quân bên mình ở trong',
            '2 ô liền kề với nhau để lấy trị số của 2 quân cơ ấy',
            'mà tính nhẩm cộng, trừ, nhân, chia với nhau. Hướng bắt',
            'quân cũng thực hiện theo 4 phương 4 hướng.',
            'Đáp số của mỗi phép tính ấy là điểm được bắt quân đối',
            'phương. Chỉ đánh số nguyên đơn từ 1 đến 9. Quá 10, 20, ',
            '30.. Thì trừ đi 10, 20, 30..',
            'Kết thúc ván cờ:',
            '1_ Thắng tuyệt đối: Bên nào bắt được quân số "0" trước',
            '                                  là thắng Tuyệt đối.',
            '2_ Thắng điểm: Mỗi dấu chấm tròn trên mặt quân cờ tương',
            '                                  ứng với 1 điểm.',
            '* Hai bên tự thỏa thuận thang điểm cho mỗi ván đấu(25,',
            '20 điểm), tự thỏa thuận người đi trước, số ván đấu,',
            'cách bắt quân.'
        ];
        var initX = 10;
        var txt_huongdan = Co.game.make.sprite(-230, -470, 'txt_huongdan');
        var btn_back = Co.game.make.button(-300, -450, 'btn_back', backTuts);
        //popup hướng dẫn
        var popup_tut = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'gui_tut');
        popup_tut.alpha = 1;
        popup_tut.anchor.set(0.5);
        popup_tut.inputEnabled = true;
        popup_tut.input.enableDrag();
        popup_tut.scale.set(0);
        popup_tut.addChild(txt_huongdan);
        popup_tut.addChild(btn_back);

        for (var i = 0; i < text_tuts.length; i++) {
            this.index = this.game.add.text( -290, initX -340, text_tuts[i],
                        { font: 'bold 20px Arial',fill:'white', align: "center" });
            popup_tut.addChild(this.index);
            this.index.anchor.set(0);
            initX += 30;
        }


        //function settings
        function backTuts(){
            var run_tut = null; 
            run_tut = Co.game.add.tween(popup_tut.scale).to( { x: 0, y: 0 }, 700, Phaser.Easing.Elastic.In, true);
        }
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
            // Co.game.add.sprite(0, 0, 'bg_black');
            if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
            {
                return;
            }
            // Co.game.add.tween(bg_black.scale).to({ x:1, y:1}, 1000, Phaser.Easing.Elastic.Out, true);
            tween = Co.game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);           
        };
        function closePopup(){
            if (tween && tween.isRunning || popup.scale.x === 0.1)
            {
                return;
            }
            // Co.game.add.tween(bg_black.scale).to({ x:0, y:0}, 1000, Phaser.Easing.Elastic.Out, true);
            tween = Co.game.add.tween(popup.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
        };
    },
    start: function(ok){
        if(ok == 2){
            Co.game.state.start('play');
        }
    }
}