var bootState = {
    preload: function () {
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
        Co.game.load.image('quancoto', 'Assets/Loading/quanCoTo.png');
        Co.game.load.image('text_loading', 'Assets/Loading/text_loading.png');

    },
    create: function () {
        // var bg = Co.game.add.sprite(0, 0, 'bg');      
        Co.tengame = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY - 300, 'tengame');
        Co.tengame.anchor = new Phaser.Point(0.5, 0.5);
        var quanCoTo = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'quancoto');
        quanCoTo.anchor.set(0.5);
        var txt_loading = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY + 150, 'text_loading')
        txt_loading.anchor.set(0.5);
        Co.checkPlay = 0;
    },
    update: function () {
        Co.checkPlay += 1;
        if (Co.checkPlay === 30) {
            this.start();
        }
    },
    start: function () {
        Co.game.state.start('load');
    }
};