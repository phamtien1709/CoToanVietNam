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
        var bg = Co.game.add.sprite(0, 0, 'bg');
        var win_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY -100, 'win_img');
        win_img.anchor.set(0.5);
        win_img.scale.set(0);
        var lose_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY -100, 'lose_img');
        lose_img.anchor.set(0.5);
        lose_img.scale.set(0);
        var deuce_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY -100, 'deuce_img');
        deuce_img.anchor.set(0.5);
        deuce_img.scale.set(0);
        if(Co.deuceGame){
            Co.game.add.tween(deuce_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
        }else{
            if(Co.blueWin){
                if(socket.id == Co.idBlue){
                    Co.game.add.tween(win_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
                }
                if(socket.id == Co.idRed){
                    Co.game.add.tween(lose_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);                
                }
            }
            if(Co.redWin){
                if(socket.id == Co.idBlue){
                    Co.game.add.tween(lose_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
                }
                if(socket.id == Co.idRed){
                    Co.game.add.tween(win_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);                
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
            Co.game.state.start('menu');
            socket.emit("leave-room", socket.id);
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