var playState = {
    preload: function(){
        
    },
    create: function(){
        Co.game.physics.startSystem(Phaser.Physics.ARCADE);
        //win get
        Co.blueWin = false;
        Co.redWin = false;
        //drawMap
        Co.drawBoard = false;
        Co.newPos = [0,0];
        Co.blueFirst = 'blue';
        this.drawBoardDefault(Co.configs.BOARD_DEFAULT, Co.drawBoard);
        //drawChessDefault
        Co.chessGroup = Co.game.add.physicsGroup();
        Co.chesses = [];
        //vị trí cờ
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
            ['blue','blue','blue','blue','blue','blue','blue','blue','blue'],
            [0,0,0,0,'blue',0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,'red',0,0,0,0],
            ['red','red','red','red','red','red','red','red','red']
        ];
        this.drawChessOnBoard(Co.configs.PIECE_DEFAULT);
        //get point
        Co.pointBlueNow = 0;
        Co.pointBluePrev = 0;
        Co.pointRedNow = 0;
        Co.pointRedPrev = 0;
        Co.style = { font: "30px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        Co.displayingPointBlue = Co.game.add.text(10, 1120, `Blue: ${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, Co.style);
        Co.displayingPointRed = Co.game.add.text(700, 1120, `Red: ${Co.pointBluePrev}/${Co.configs.WIN_POINT}`, Co.style);
        //directGroup
        Co.directGroup = [];
        Co.directGroup.anchor = new Phaser.Point(0.5,0.5);
        Co.directs = [];
        Co.directMoveto = {
            x : 0,
            y : 0
        };
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
    },
    update: function(){
        if(Co.pointBlueNow !== Co.pointBluePrev){
            Co.pointBluePrev = Co.pointBlueNow;
            Co.displayingPointBlue.setText(`Blue: ${Co.pointBluePrev}/${Co.configs.WIN_POINT}`);
        }
        if(Co.pointRedNow !== Co.pointRedPrev){
            Co.pointRedPrev = Co.pointRedNow;
            Co.displayingPointRed.setText(`Red: ${Co.pointRedPrev}/${Co.configs.WIN_POINT}`);
        }
        if((Co.pointBluePrev >= Co.configs.WIN_POINT)||(Co.pointRedPrev >= Co.configs.WIN_POINT)){
            if(Co.pointBluePrev >= Co.configs.WIN_POINT) Co.blueWin = true;
            if(Co.pointRedPrev >= Co.configs.WIN_POINT) Co.redWin = true;
            setTimeout(function(){
                Co.game.state.start('win');
            }, 1200);;
        }
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