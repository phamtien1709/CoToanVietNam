var Co = {};
Co.configs = {
    GAME_WIDTH : 900,
    GAME_HEIGHT : 1550,
    WIN_POINT : 20,
    HEAD_HEIGHT: 200,
    BOARD_DEFAULT : [
        [1, 2, 1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 3, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1, 2, 1],
        [2, 1, 2, 1, 3, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1, 2, 1]
    ],
    PIECE_DEFAULT : [
        [9, 8, 7, 6, 5, 4, 3, 2, 1],
        [0, 0, 0, 0, 10, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 100, 0, 0, 0, 0],
        [91, 92, 93, 94, 95, 96, 97, 98, 99]
    ],
    STEP_DEFAULT : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

window.onload = function(){
    Co.game = new Phaser.Game(Co.configs.GAME_WIDTH, Co.configs.GAME_HEIGHT, Phaser.CANVAS,'gameArea', null, false, false);
    // Co.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    Co.game.state.add('boot', bootState);
    Co.game.state.add('load', loadState);
    Co.game.state.add('menu', menuState);
    Co.game.state.add('tutorial', tutorialState);
    Co.game.state.add('play', playState);
    Co.game.state.add('win', winState);
    Co.game.state.start('boot');
}