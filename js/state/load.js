var loadState = {
    preload: function(){
        Co.game.time.advancedTiming = true;
        
        Co.game.scale.minWidth = 450;
        Co.game.scale.minHeight = 550;
        Co.game.scale.maxWidth = 900;
        Co.game.scale.maxHeight = 1100;
        Co.game.scale.pageAlignHorizontally = true;
        Co.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    

        Co.game.load.image('tengame', 'Assets/Loading/tengame.png');
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
        Co.game.load.image('blue9', 'Assets/Bandau/coxanh8.png');
        Co.game.load.image('blue8', 'Assets/Bandau/coxanh8.png');
        Co.game.load.image('blue7', 'Assets/Bandau/coxanh7.png');
        Co.game.load.image('blue6', 'Assets/Bandau/coxanh6.png');
        Co.game.load.image('blue5', 'Assets/Bandau/coxanh5.png');
        Co.game.load.image('blue4', 'Assets/Bandau/coxanh4.png');
        Co.game.load.image('blue3', 'Assets/Bandau/coxanh3.png');
        Co.game.load.image('blue2', 'Assets/Bandau/coxanh2.png');
        Co.game.load.image('blue1', 'Assets/Bandau/coxanh1.png');
        Co.game.load.image('chonco', 'Assets/Bandau/Chonco.png');
        Co.game.load.image('huongdi', 'Assets/Bandau/huongdi.png')
    },
    create: function(){
        Co.tengame = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'tengame');
        Co.tengame.anchor = new Phaser.Point(0.5,0.5);
        Co.checkPlay = 0;
        this.start();
    },
    // update: function(){
    //     Co.checkPlay += 1;
    //     if (Co.checkPlay === 300){
    //         this.start();
    //     }
    // },
    start: function(){
        Co.game.state.start('menu');
    }
}