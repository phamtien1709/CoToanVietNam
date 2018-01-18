var tutorialState = {
    preload: function () {
        Co.game.time.advancedTiming = true;
        Co.game.input.maxPointers = 1;
        Co.game.stage.disableVisibilityChange = true;

        Co.game.load.image('tengame', 'Assets/Loading/tengame.png');
        Co.game.load.image('gui_BG', 'Assets/Setting/GUiBG2.png');
        Co.game.load.image('quancoto', 'Assets/Loading/quanCoTo.png');
        Co.game.load.image('text_loading', 'Assets/Loading/text_loading.png');

    },
    create: function () {
        var bg = Co.game.add.sprite(0, 0, 'bg');
        Co.drawBoard = false;
        Co.chessGroup = Co.game.add.physicsGroup();
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, Co.drawBoard);
        Co.chesses = [];
        var btn_demo = Co.game.add.button(0, 0, 'quancoto');
        btn_demo.events.onInputDown.add(() => {
            Co.game.state.start('menu');
        });
        Co.chessesPos = [
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
        ];
        //giá trị cờ
        Co.chessesValue = [
            [9, 8, 7, 6, 5, 4, 3, 2, 1],
            [0, 0, 0, 0, 10, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 10, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6, 7, 8, 9]
        ];
        //groupKill
        Co.posKillGroup = [];
        Co.killGroup = [];
        //loại cờ
        Co.chessesType = [
            ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
            [0, 0, 0, 0, 'blue', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 'red', 0, 0, 0, 0],
            ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']
        ];
        this.drawChessOnBoard(Co.configs.PIECE_DEFAULT);
    },
    update: function () {
        
    },
    start: function () {
    },
    drawBoardDefault: function (boardArr, drawBoard) {
        for (i = 0; i < boardArr.length; i++) {
            for (j = 0; j < boardArr[i].length; j++) {
                if (boardArr[i][j] === 1) {
                    Co.game.add.sprite(j * 100, i * 100 + Co.configs.HEAD_HEIGHT, 'oden');
                } else if (boardArr[i][j] === 2) {
                    Co.game.add.sprite(j * 100, i * 100 + Co.configs.HEAD_HEIGHT, 'otrang');
                } else if (boardArr[i][j] === 3) {
                    Co.game.add.sprite(j * 100, i * 100 + Co.configs.HEAD_HEIGHT, 'otuong');
                }
            }
        }
        return drawBoard = true;
    },
    drawChessOnBoard: function (chessArr, drawBoard) {
        // if (drawBoard) {
        for (i = 0; i < chessArr.length; i++) {
            for (j = 0; j < chessArr[i].length; j++) {
                switch (chessArr[i][j]) {
                    case 1:
                        {
                            Co.chesses.push(new chess1Blue(j, i));
                            break;
                        }
                    case 2:
                        {
                            Co.chesses.push(new chess2Blue(j, i));
                            break;
                        }
                    case 3:
                        {
                            Co.chesses.push(new chess3Blue(j, i));
                            break;
                        }
                    case 4:
                        {
                            Co.chesses.push(new chess4Blue(j, i));
                            break;
                        }
                    case 5:
                        {
                            Co.chesses.push(new chess5Blue(j, i));
                            break;
                        }
                    case 6:
                        {
                            Co.chesses.push(new chess6Blue(j, i));
                            break;
                        }
                    case 7:
                        {
                            Co.chesses.push(new chess7Blue(j, i));
                            break;
                        }
                    case 8:
                        {
                            Co.chesses.push(new chess8Blue(j, i));
                            break;
                        }
                    case 9:
                        {
                            Co.chesses.push(new chess9Blue(j, i));
                            break;
                        }
                    case 10:
                        {
                            Co.chesses.push(new chess10Blue(j, i));
                            break;
                        }
                    case 100:
                        {
                            Co.chesses.push(new chess10Red(j, i));
                            break;
                        }
                    case 99:
                        {
                            Co.chesses.push(new chess9Red(j, i));
                            break;
                        }
                    case 98:
                        {
                            Co.chesses.push(new chess8Red(j, i));
                            break;
                        }
                    case 97:
                        {
                            Co.chesses.push(new chess7Red(j, i));
                            break;
                        }
                    case 96:
                        {
                            Co.chesses.push(new chess6Red(j, i));
                            break;
                        }
                    case 95:
                        {
                            Co.chesses.push(new chess5Red(j, i));
                            break;
                        }
                    case 94:
                        {
                            Co.chesses.push(new chess4Red(j, i));
                            break;
                        }
                    case 93:
                        {
                            Co.chesses.push(new chess3Red(j, i));
                            break;
                        }
                    case 92:
                        {
                            Co.chesses.push(new chess2Red(j, i));
                            break;
                        }
                    case 91:
                        {
                            Co.chesses.push(new chess1Red(j, i));
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
            }
        }
    }
};