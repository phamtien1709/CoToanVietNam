class ChessController {
    constructor(x, y, spriteName) {
        this.x = x * 100 + 50;
        this.y = y * 100 + 50 + Co.configs.HEAD_HEIGHT;
        this.sprite = Co.chessGroup.create(this.x, this.y, spriteName);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.inputEnabled = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.events.onInputDown.add(function () {
            // console.log(Co.blueFirst);
            // if(this.sprite.type == Co.blueFirst){
            if (!Co.onMouseDown) {
                if ((Co.blueFirst == 'blue') && (socket.id == Co.idBlue) && (this.sprite.type == Co.blueFirst)) {
                    this.directBlue();
                    // console.log(Co.chessesType);
                    // console.log(Co.chessesValue);
                    // console.log(Co.chessesPos);
                    return Co.onMouseDown = true;
                }
                if ((Co.blueFirst == 'red') && (socket.id == Co.idRed)&& (this.sprite.type == Co.blueFirst)) {
                    this.directRed();
                    // console.log(Co.chessesType);
                    // console.log(Co.chessesValue);
                    // console.log(Co.chessesPos);
                    return Co.onMouseDown = true;
                }
            }
            if (Co.onMouseDown) {
                this.offDirect();
            }
            // }
        }, this);
        this.sprite.update = this.update.bind(this);
    }
    update() {
    }
    //trả lại hết giá trị khi đi xong
    offDirect() {
        for (i = 0; i < Co.directGroup.length; i++) {
            Co.directGroup[i].destroy();
        }
        for (i = 0; i < Co.killGroup.length; i++) {
            Co.killGroup[i].destroy();
        }
        Co.directGroup = [];
        Co.killGroup = [];
        Co.posKillGroup = [];
        Co.chonco.destroy();
        // console.log(Co.chessesPos);
        this.resetArr(Co.directsP);
        return Co.onMouseDown = false;
    }
    directBlue() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }));
        for (i = 0; i < Co.directGroup.length; i++) {
            Co.directGroup[i].events.onInputDown.add((i) => {
                Co.prevPos = {
                    x: this.x,
                    y: this.y
                };
                //đổi giá trị
                Co.exam = {
                    x: 0,
                    y: 0
                };
                Co.exam.anchor = new Phaser.Point(0.5, 0.5);
                Co.exam.x = i.position.x + 50 - 39;
                Co.exam.y = i.position.y + 50 - 38.5;
                Co.tweenChonco = Co.game.add.tween(this.sprite).to(
                    {
                        x: Co.exam.x,
                        y: Co.exam.y
                    }, 600, "Quart.easeOut");
                Co.tweenChonco.start();
                //lắp giá trị
                this.offDirect();
                // Co.blueFirst = 'red';
                //socket
                socket.emit("blue-move", {
                    turn: "red",
                    positionAfter: {
                        x: Co.exam.x,
                        y: Co.exam.y
                    },
                    positionPrev: {
                        x: Co.prevPos.x,
                        y: Co.prevPos.y
                    },
                    positionAfterOnMatrix: {
                        x: (Co.exam.x - 50) / 100,
                        y: (Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                    },
                    positionPrevOnMatrix: {
                        x: (Co.prevPos.x - 50) / 100,
                        y: (Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                    },
                    chessesPos: 12,
                    chessesValue: this.sprite.STEP,
                    chessesType: this.sprite.type
                });
            });
        };
        //socket
        this.eatEnemyChessBlue();
    }
    directRed() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }));
        for (i = 0; i < Co.directGroup.length; i++) {
            Co.directGroup[i].events.onInputDown.add((i) => {
                Co.prevPos = {
                    x: this.x,
                    y: this.y
                };
                Co.exam = {
                    x: 0,
                    y: 0
                };
                Co.exam.anchor = new Phaser.Point(0.5, 0.5);
                Co.exam.x = i.position.x + 50 - 39;
                Co.exam.y = i.position.y + 50 - 38.5;
                Co.tweenChonco = Co.game.add.tween(this.sprite).to(
                    {
                        x: Co.exam.x,
                        y: Co.exam.y
                    }, 600, "Quart.easeOut");
                Co.tweenChonco.start();
                //lắp giá trị
                // this.y = Co.exam.y;
                this.offDirect();
                // Co.blueFirst = 'blue';
                //socket
                socket.emit("red-move", {
                    turn: "blue",
                    positionAfter: {
                        x: Co.exam.x,
                        y: Co.exam.y
                    },
                    positionPrev: {
                        x: Co.prevPos.x,
                        y: Co.prevPos.y
                    },
                    positionAfterOnMatrix: {
                        x: (Co.exam.x - 50) / 100,
                        y: (Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                    },
                    positionPrevOnMatrix: {
                        x: (Co.prevPos.x - 50) / 100,
                        y: (Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                    },
                    chessesPos: 13,
                    chessesValue: this.sprite.STEP,
                    chessesType: this.sprite.type
                });
            });
        };
        //socket.io
        this.eatEnemyChessRed();
    }
    resetArr(arr) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
    }
    //ăn chess
    eatEnemyChessBlue() {
        for (i = 0; i < Co.killGroup.length; i++) {
            Co.killGroup[i].events.onInputDown.add((i) => {
                var posEatX = (i.position.x - 19.5) / 100;
                var posEatY = (i.position.y - 19.5) / 100;
                var posRealX = i.position.x - 19.5 + 50;
                var posRealY = i.position.y - 19.5 + 50;
                // console.log(posRealX, pos
                if ((Co.chessesType[posEatY - Co.configs.HEAD_HEIGHT / 100][posEatX] !== 0) && (Co.chessesType[posEatY - Co.configs.HEAD_HEIGHT / 100][posEatX] !== Co.chessesType[(this.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(this.x - 50) / 100])) {
                    // console.log("eat eat eat")
                    var obj = Co.chessGroup.children.find(function (obj) {
                        if ((obj.position.x === posRealX) && (obj.position.y === posRealY)) {
                            return obj;
                        }
                    })
                    // console.log(obj);
                    for (i = 0; i < Co.chesses.length; i++) {
                        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y) && (this.sprite.type !== obj.type)) {
                            Co.prevPosInEat = {
                                x: this.x,
                                y: this.y
                            };
                            Co.tweenAncoBlue = Co.game.add.tween(this.sprite).to(
                                {
                                    x: obj.position.x,
                                    y: obj.position.y
                                }, 600, "Quart.easeOut");
                            Co.tweenAncoBlue.start();
                            //lắp giá trị
                            this.offDirect();
                            // Co.blueFirst = 'red';
                            //socket
                            socket.emit("blue-eat", {
                                turn: "red",
                                posReal: {
                                    x: posRealX,
                                    y: posRealY
                                },
                                positionAfter: {
                                    x: obj.position.x,
                                    y: obj.position.y
                                },
                                positionPrev: {
                                    x: Co.prevPosInEat.x,
                                    y: Co.prevPosInEat.y
                                },
                                positionAfterOnMatrix: {
                                    x: (obj.position.x - 50) / 100,
                                    y: (obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                                },
                                positionPrevOnMatrix: {
                                    x: (Co.prevPosInEat.x - 50) / 100,
                                    y: (Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                                },
                                chessesPos: 12,
                                chessesValue: this.sprite.STEP,
                                chessesType: this.sprite.type
                            });
                            break;
                        }
                    }
                }
                else {
                 }
                // else todo
            });
        }
    }
    eatEnemyChessRed() {
        for (i = 0; i < Co.killGroup.length; i++) {
            Co.killGroup[i].events.onInputDown.add((i) => {
                var posEatX = (i.position.x - 19.5) / 100;
                var posEatY = (i.position.y - 19.5) / 100;
                var posRealX = i.position.x - 19.5 + 50;
                var posRealY = i.position.y - 19.5 + 50;

                // if có quân khác màu => ăn
                if ((Co.chessesType[posEatY - Co.configs.HEAD_HEIGHT / 100][posEatX] !== 0) && (Co.chessesType[posEatY - Co.configs.HEAD_HEIGHT / 100][posEatX] !== Co.chessesType[(this.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(this.x - 50) / 100])) {
                    var obj = Co.chessGroup.children.find(function (obj) {
                        if ((obj.position.x === posRealX) && (obj.position.y === posRealY)) {
                            return obj;
                        }
                    })
                    // console.log(obj);
                    for (i = 0; i < Co.chesses.length; i++) {
                        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y) && (this.sprite.type !== obj.type)) {
                            Co.prevPosInEat = {
                                x: this.x,
                                y: this.y
                            };
                            Co.tweenAncoBlue = Co.game.add.tween(this.sprite).to(
                                {
                                    x: obj.position.x,
                                    y: obj.position.y
                                }, 600, "Quart.easeOut");
                            Co.tweenAncoBlue.start();
                            //lắp giá trị
                            this.offDirect();
                            // Co.blueFirst = 'blue';
                            //socket
                            socket.emit("red-eat", {
                                turn: "blue",
                                posReal: {
                                    x: posRealX,
                                    y: posRealY
                                },
                                positionAfter: {
                                    x: obj.position.x,
                                    y: obj.position.y
                                },
                                positionPrev: {
                                    x: Co.prevPosInEat.x,
                                    y: Co.prevPosInEat.y
                                },
                                positionAfterOnMatrix: {
                                    x: (obj.position.x - 50) / 100,
                                    y: (obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                                },
                                positionPrevOnMatrix: {
                                    x: (Co.prevPosInEat.x - 50) / 100,
                                    y: (Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100
                                },
                                chessesPos: 12,
                                chessesValue: this.sprite.STEP,
                                chessesType: this.sprite.type
                            });
                            break;
                        }
                    }
                    // console.log(Co.chesses);
                    // i.destroy();
                }
                else {
                    // console.log("kidding me?");
                }
                // else todo
            });
        }
    }
}