var winState = {
    preload: function(){
        Co.game.load.image('win_img', 'Assets/Bandau/Eff_Thang.png');
        Co.game.load.image('lose_img', 'Assets/Bandau/Eff_Thua.png');
        Co.game.load.image('winBlue', 'Assets/Bandau/coxanh10.png');
        Co.game.load.image('winRed', 'Assets/Bandau/codo10.png');
        Co.game.load.image('deuce_img', 'Assets/Bandau/Eff_hoa.png');
        Co.game.load.image('btn_replay', 'Assets/Bandau/button_replay.png');
    },
    create: function(){
        Co.tweenLose = 0;
        Co.tweenWin = 0;
        Co.tweenDeuce = 0;
        var win_img = 0;
        var lose_img = 0;
        var deuce_img = 0;
        var bg = Co.game.add.sprite(0, 0, 'bg');
        win_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY -100, 'win_img');
        win_img.anchor.set(0.5);
        win_img.scale.set(0);
        lose_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY -100, 'lose_img');
        lose_img.anchor.set(0.5);
        lose_img.scale.set(0);
        deuce_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY -100, 'deuce_img');
        deuce_img.anchor.set(0.5);
        deuce_img.scale.set(0);
        if(Co.deuceGame){
            Co.game.add.tween(deuce_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
            var txt_deuce_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, "Bạn mất 0$", { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
            txt_deuce_point.anchor.set(0.5);
            txt_deuce_point.scale.set(0);
            Co.tweenDeuce = Co.game.add.tween(txt_deuce_point.scale).to({x:1, y:1}, 600, Phaser.Easing.Quadratic.InOut, true);
            Co.tweenDeuce.start();
            Co.tweenDeuce = Co.game.add.tween(txt_deuce_point).to({x:-100, y: -100},800, "Quart.easeOut" );
            setTimeout(function(){
              Co.tweenDeuce.start();
            }, 1500);
        }else{
            if(Co.blueWin){
                if(socket.id == Co.idBlue){
                    Co.game.add.tween(win_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_win_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, "Bạn thắng 2000$", { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_win_point.anchor.set(0.5);
                    txt_win_point.scale.set(0);
                    Co.tweenWin = Co.game.add.tween(txt_win_point.scale).to({x:1, y:1}, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenWin.start();
                    Co.tweenWin = Co.game.add.tween(txt_win_point).to({x:-100, y: -100},800, "Quart.easeOut" );
                    setTimeout(function(){
                      Co.tweenWin.start();
                    }, 1500);
                }
                if(socket.id == Co.idRed){
                    Co.game.add.tween(lose_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_lose_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, "Bạn bị trừ 2000$", { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_lose_point.anchor.set(0.5);
                    txt_lose_point.scale.set(0);
                    Co.tweenLose = Co.game.add.tween(txt_lose_point.scale).to({x:1, y:1}, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenLose.start();
                    Co.tweenLose = Co.game.add.tween(txt_lose_point).to({x:-100, y: -100},800, "Quart.easeOut" );
                    setTimeout(function(){
                      Co.tweenLose.start();
                    }, 1500);
                }
            }
            if(Co.redWin){
                if(socket.id == Co.idBlue){
                    Co.game.add.tween(lose_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_lose_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, "Bạn bị trừ 2000$", { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_lose_point.anchor.set(0.5);
                    txt_lose_point.scale.set(0);
                    Co.tweenLose = Co.game.add.tween(txt_lose_point.scale).to({x:1, y:1}, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenLose.start();
                    Co.tweenLose = Co.game.add.tween(txt_lose_point).to({x:-100, y: -100},800, "Quart.easeOut" );
                    setTimeout(function(){
                      Co.tweenLose.start();
                    }, 1500);
                }
                if(socket.id == Co.idRed){
                    Co.game.add.tween(win_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
                    var txt_win_point = Co.game.add.text(Co.game.world.centerX, Co.game.world.centerY + 200, "Bạn thắng 2000$", { font: "40px Arial", fill: "yellow", boundsAlignH: "center", boundsAlignV: "middle" });
                    txt_win_point.anchor.set(0.5);
                    txt_win_point.scale.set(0);
                    Co.tweenWin = Co.game.add.tween(txt_win_point.scale).to({x:1, y:1}, 600, Phaser.Easing.Quadratic.InOut, true);
                    Co.tweenWin.start();
                    Co.tweenWin = Co.game.add.tween(txt_win_point).to({x:-100, y: -100},800, "Quart.easeOut" );
                    setTimeout(function(){
                      Co.tweenWin.start();
                    }, 1500);
                }
            }
        }
        var btn_replay = Co.game.add.sprite(Co.game.world.centerX, 900 + Co.configs.HEAD_HEIGHT, 'btn_replay');
        btn_replay.anchor.set(0.5);
        btn_replay.scale.set(0.6);
        btn_replay.inputEnabled = true;
        btn_replay.input.priorityID = 3;
        btn_replay.input.useHandCursor = true;
        btn_replay.events.onInputDown.add(()=>{
            // Co.game.state.start('menu');
            btn_replay.destroy();
            Co.game.add.text(Co.game.world.centerX - 150, 900 + Co.configs.HEAD_HEIGHT, "Waiting for new game...", { font: "30px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
            socket.emit("leave-room-after-out", socket.id);
        },this);
        var btn_thoatgame = Co.game.add.sprite(Co.game.world.centerX, 1050 + Co.configs.HEAD_HEIGHT, 'btn_thoatgame');
        btn_thoatgame.anchor.set(0.5);
        btn_thoatgame.inputEnabled = true;
        btn_thoatgame.input.priorityID = 3;
        btn_thoatgame.input.useHandCursor = true;
        btn_thoatgame.events.onInputDown.add(()=>{
            Co.game.state.start('menu');
            socket.emit("leave-room", socket.id);
        },this);
        // console.log(socket.id);
    },
    update: function(){

    },
    render: function(){

    }
}
