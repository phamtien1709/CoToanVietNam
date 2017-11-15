var winState = {
    preload: function(){
        Co.game.load.image('win_img', 'Assets/Bandau/Eff_thang.png');
        Co.game.load.image('winBlue', 'Assets/Bandau/coxanh10.png');
        Co.game.load.image('winRed', 'Assets/Bandau/codo10.png');
    },
    create: function(){
        var bg = Co.game.add.sprite(0, 0, 'bg');
        var win_img = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'win_img');
        win_img.anchor.set(0.5);
        win_img.scale.set(0.1);
        var winBlue = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY  + 290, 'winBlue');
        winBlue.anchor.set(0.5);
        winBlue.scale.set(0);
        var winRed = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY  + 290, 'winRed');
        winRed.anchor.set(0.5);
        winRed.scale.set(0);
        if(Co.blueWin){
            Co.game.add.tween(win_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);            
            Co.game.add.tween(winBlue.scale).to({x:1.5, y:1.5}, 600, Phaser.Easing.Quadratic.InOut, true);
        }
        if(Co.redWin){
            Co.game.add.tween(win_img.scale).to({x:1.3, y:1.3}, 600, Phaser.Easing.Quadratic.InOut, true);
            Co.game.add.tween(winRed.scale).to({x:1.5, y:1.5}, 600, Phaser.Easing.Quadratic.InOut, true);    
        }
        var btn_thoatgame = Co.game.add.sprite(Co.game.world.centerX, 1050, 'btn_thoatgame');
        btn_thoatgame.anchor.set(0.5);
        btn_thoatgame.inputEnabled = true;
        btn_thoatgame.input.priorityID = 3;
        btn_thoatgame.input.useHandCursor = true;
        btn_thoatgame.events.onInputDown.add(()=>{
            Co.game.state.start('menu');
        },this);        
    },
    update: function(){

    },
    render: function(){

    }
}