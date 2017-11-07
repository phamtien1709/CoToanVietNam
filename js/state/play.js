var playState = {
    preload: function(){

    },
    create: function(){
        Co.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //drawMap
        Co.drawBoard = false;
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, Co.drawBoard);
        //drawChessDefault
        Co.chessGroup = Co.game.add.physicsGroup();
        Co.chesses = [];
        Co.chessesPos = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];
        this.drawChessOnBoard(Co.configs.PIECE_DEFAULT);
        //directGroup
        Co.directGroup = [];
        Co.directs = [];
        Co.directsP = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];
        Co.chonco = Co.game.add.sprite(-100, -100, 'chonco');
        Co.onMouseDown = false;
        // Co.chonco.inputEnabled = true;
        // if(Co.chonco.events.onInputDown.add(function(){
        //     console.log("Click");
        // }, this));
    },
    update: function(){
        // if(Co.chonco.events.onInputDown.add(function(){
        //     console.log("Click");
        // }, this));
    },
    render: function(){

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
    },
    drawChessOnBoard: function(chessArr){
        for (i = 0; i < chessArr.length; i++){
            for(j=0; j<chessArr[i].length; j++){
                switch (chessArr[i][j]){
                    case 1 : {
                        Co.chesses.push(new chess1Blue(j, i));
                        break;
                    }
                    case 2 : {
                        Co.chesses.push(new chess2Blue(j, i));
                        break;
                    }
                    case 3 : {
                        Co.chesses.push(new chess3Blue(j, i));
                        break;
                    }
                    case 4 : {
                        Co.chesses.push(new chess4Blue(j, i));
                        break;
                    }
                    case 5 : {
                        Co.chesses.push(new chess5Blue(j, i));
                        break;
                    }
                    case 6 : {
                        Co.chesses.push(new chess6Blue(j, i));
                        break;
                    }
                    case 7 : {
                        Co.chesses.push(new chess7Blue(j, i));
                        break;
                    }
                    case 8 : {
                        Co.chesses.push(new chess8Blue(j, i));
                        break;
                    }
                    case 9 : {
                        Co.chesses.push(new chess9Blue(j, i));
                        break;
                    }
                    case 10 : {
                        Co.chesses.push(new chess10Blue(j, i));
                        break;
                    }
                    case 100 : {
                        Co.chesses.push(new chess10Red(j, i));
                        break;
                    }
                    case 99 : {
                        Co.chesses.push(new chess9Red(j, i));
                        break;
                    }
                    case 98 : {
                        Co.chesses.push(new chess8Red(j, i));
                        break;
                    }
                    case 97 : {
                        Co.chesses.push(new chess7Red(j, i));
                        break;
                    }
                    case 96 : {
                        Co.chesses.push(new chess6Red(j, i));
                        break;
                    }
                    case 95 : {
                        Co.chesses.push(new chess5Red(j, i));
                        break;
                    }
                    case 94 : {
                        Co.chesses.push(new chess4Red(j, i));
                        break;
                    }
                    case 93 : {
                        Co.chesses.push(new chess3Red(j, i));
                        break;
                    }
                    case 92 : {
                        Co.chesses.push(new chess2Red(j, i));
                        break;
                    }
                    case 91 : {
                        Co.chesses.push(new chess1Red(j, i));
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }

}