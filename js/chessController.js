class ChessController {
    constructor(x, y, spriteName) {
        this.x = x * 100 + 50;
        this.y = y * 100 + 50 + Co.configs.HEAD_HEIGHT;
        this.sprite = Co.chessGroup.create(this.x, this.y, spriteName);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.inputEnabled = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.events.onInputDown.add(function () {
            if (!Co.onMouseDown) {
                if ((Co.blueFirst == 'blue') && (Co.checkId == Co.idBlue) && (this.sprite.type == Co.blueFirst)) {
                    this.directBlue();
                    // console.log(Co.chessesType);
                    // console.log(Co.chessesValue);
                    // console.log(Co.chessesPos);
                    return Co.onMouseDown = true;
                }
                if ((Co.blueFirst == 'red') && (Co.checkId == Co.idRed) && (this.sprite.type == Co.blueFirst)) {
                    this.directRed();
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
                var obj = Co.chesses.find((obj) => {
                    if ((obj.x === Co.prevPos.x) && (obj.y === Co.prevPos.y)) {
                        return obj;
                    }
                });
                // console.log(obj);
                for (i in Co.chesses) {
                    if ((Co.chesses[i].x == obj.x) && (Co.chesses[i].y == obj.y)) {
                        // console.log("move");
                        Co.chesses[i].sprite.position.x = Co.exam.x;
                        Co.chesses[i].sprite.position.y = Co.exam.y;
                        Co.chesses[i].x = Co.exam.x;
                        Co.chesses[i].y = Co.exam.y;
                    }
                }
                //lawps gias trij
                Co.chessesPos[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 0;
                Co.chessesValue[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 0;
                Co.chessesType[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 0;
                Co.chessesPos[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 12;
                Co.chessesValue[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = this.sprite.STEP;
                Co.chessesType[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = this.sprite.type;
                //fb not socket
                FB.ui({
                    method: 'apprequests',
                    message: 'request-move',
                    data: [{
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
                        chessesType: this.sprite.type,
                        id: Co.checkId
                    }],
                    to: Co.idRed,
                    action_type: 'turn'
                }, function (response) {
                    if (response.error_message !== undefined) {
                        var obj = Co.chesses.find((obj) => {
                            if ((obj.x === Co.exam.x) && (obj.y === Co.exam.y)) {
                                return obj;
                            }
                        });
                        // console.log(obj);
                        for (i in Co.chesses) {
                            if ((Co.chesses[i].x == obj.x) && (Co.chesses[i].y == obj.y)) {
                                // console.log("move");
                                Co.chesses[i].sprite.position.x = Co.prevPos.x;
                                Co.chesses[i].sprite.position.y = Co.prevPos.y;
                                Co.chesses[i].x = Co.prevPos.x;
                                Co.chesses[i].y = Co.prevPos.y;
                            }
                        }
                        //lawps gias trij
                        Co.chessesPos[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 12;
                        Co.chessesPos[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 0;
                        Co.chessesValue[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = Co.chessesValue[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100];
                        Co.chessesValue[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 0;
                        Co.chessesType[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = Co.chessesType[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100];
                        Co.chessesType[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 0;
                        Co.blueFirst = 'blue';
                    }
                    if (response.error_message == undefined) {
                        Co.blueFirst = 'red';
                    }
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
                var obj = Co.chesses.find((obj) => {
                    if ((obj.x === Co.prevPos.x) && (obj.y === Co.prevPos.y)) {
                        return obj;
                    }
                });
                // console.log(obj);
                for (i in Co.chesses) {
                    if ((Co.chesses[i].x == obj.x) && (Co.chesses[i].y == obj.y)) {
                        // console.log("move");
                        Co.chesses[i].sprite.position.x = Co.exam.x;
                        Co.chesses[i].sprite.position.y = Co.exam.y;
                        Co.chesses[i].x = Co.exam.x;
                        Co.chesses[i].y = Co.exam.y;
                    }
                }
                //lawps gias trij
                Co.chessesPos[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 0;
                Co.chessesValue[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 0;
                Co.chessesType[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 0;
                Co.chessesPos[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 13;
                Co.chessesValue[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = this.sprite.STEP;
                Co.chessesType[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = this.sprite.type;
                Co.blueFirst = 'blue';
                //fb not socket
                FB.ui({
                    method: 'apprequests',
                    message: 'request-move',
                    data: [{
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
                        chessesType: this.sprite.type,
                        id: Co.checkId
                    }],
                    to: Co.idBlue,
                    action_type: 'turn'
                }, function (response) {
                    if (response.error_message !== undefined) {
                        var obj = Co.chesses.find((obj) => {
                            if ((obj.x === Co.exam.x) && (obj.y === Co.exam.y)) {
                                return obj;
                            }
                        });
                        // console.log(obj);
                        for (i in Co.chesses) {
                            if ((Co.chesses[i].x == obj.x) && (Co.chesses[i].y == obj.y)) {
                                // console.log("move");
                                Co.chesses[i].sprite.position.x = Co.prevPos.x;
                                Co.chesses[i].sprite.position.y = Co.prevPos.y;
                                Co.chesses[i].x = Co.prevPos.x;
                                Co.chesses[i].y = Co.prevPos.y;
                            }
                        }
                        //lawps gias trij
                        Co.chessesPos[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = 13;
                        Co.chessesPos[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 0;
                        Co.chessesValue[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = Co.chessesValue[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100];
                        Co.chessesValue[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 0;
                        Co.chessesType[(Co.prevPos.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPos.x - 50) / 100] = Co.chessesType[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100];
                        Co.chessesType[(Co.exam.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.exam.x - 50) / 100] = 0;
                        Co.blueFirst = 'red';
                    }
                    if (response.error_message == undefined) {
                        Co.blueFirst = 'blue';
                    }
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
                if ((Co.chessesType[posEatY - Co.configs.HEAD_HEIGHT / 100][posEatX] !== 0) && (Co.chessesType[posEatY - Co.configs.HEAD_HEIGHT / 100][posEatX] !== Co.chessesType[(this.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(this.x - 50) / 100])) {
                    var obj = Co.chessGroup.children.find(function (obj) {
                        if ((obj.position.x === posRealX) && (obj.position.y === posRealY)) {
                            return obj;
                        }
                    })
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
                            var obj = Co.chessGroup.children.find((obj) => {
                                if ((obj.x === posRealX) && (obj.y === posRealY)) {
                                    return obj;
                                }
                            });
                            // console.log(obj);
                            var obj2 = Co.chesses.find((obj) => {
                                if ((obj.x === Co.prevPosInEat.x) && (obj.y === Co.prevPosInEat.y)) {
                                    return obj;
                                }
                            });
                            for (i in Co.chesses) {
                                if ((Co.chesses[i].x == obj2.x) && (Co.chesses[i].y == obj2.y)) {
                                    // console.log("move");
                                    Co.chesses[i].sprite.position.x = obj.position.x;
                                    Co.chesses[i].sprite.position.y = obj.position.y;
                                    Co.chesses[i].x = obj.position.x;
                                    Co.chesses[i].y = obj.position.y;
                                }
                            }
                            // console.log(obj)
                            //fb not socket
                            FB.ui({
                                method: 'apprequests',
                                message: 'request-eat',
                                data: [{
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
                                }],
                                to: Co.idRed,
                                action_type: 'turn'
                            }, function (response) {
                                if(response.error_message == undefined){                                    
                                    for (i = 0; i < Co.chesses.length; i++) {
                                        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y)&&(Co.chesses[i].sprite.type =='red')) {
                                            // console.log(Co.chesses[i]);
                                            // console.log(Co.chesses[i]);
                                            Co.chesses[i].sprite.kill();
                                            if (Co.blueFirst == "blue") Co.ateList.blue.push(Co.chesses[i]);
                                            if (Co.blueFirst == "red") Co.ateList.red.push(Co.chesses[i]);
                                            Co.chesses.splice(i, 1);
                                        }
                                    };
                                    if (Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] === 10) {
                                        Co.pointBlueNow += 100;
                                    } else {
                                        Co.pointBlueNow += Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100];
                                    }
                                    Co.chessesPos[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] = 12;
                                    Co.chessesPos[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100] = 0;
                                    Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] = Co.chessesValue[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100];
                                    Co.chessesValue[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100] = 0;
                                    Co.chessesType[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] = Co.chessesType[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100];
                                    Co.chessesType[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100] = 0;                                    
                                    Co.blueFirst = 'red';
                                }
                                if(response.error_message !== undefined){
                                    for (i = 0; i < Co.chesses.length; i++) {
                                        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y)&&(Co.chesses[i].sprite.type =='blue')) {
                                            // console.log(Co.chesses[i]);
                                            // console.log(Co.chesses[i]);
                                            Co.chesses[i].sprite.position.x = Co.prevPosInEat.x;
                                            Co.chesses[i].sprite.position.y = Co.prevPosInEat.y;
                                            Co.chesses[i].x = Co.prevPosInEat.x;
                                            Co.chesses[i].y = Co.prevPosInEat.y;
                                        }
                                    };                           
                                    Co.blueFirst = 'blue';
                                }
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
                            var obj = Co.chessGroup.children.find((obj) => {
                                if ((obj.x === posRealX) && (obj.y === posRealY)) {
                                    return obj;
                                }
                            });
                            // console.log(obj);
                            var obj2 = Co.chesses.find((obj) => {
                                if ((obj.x === Co.prevPosInEat.x) && (obj.y === Co.prevPosInEat.y)) {
                                    return obj;
                                }
                            });
                            for (i in Co.chesses) {
                                if ((Co.chesses[i].x == obj2.x) && (Co.chesses[i].y == obj2.y)) {
                                    // console.log("move");
                                    Co.chesses[i].sprite.position.x = obj.position.x;
                                    Co.chesses[i].sprite.position.y = obj.position.y;
                                    Co.chesses[i].x = obj.position.x;
                                    Co.chesses[i].y = obj.position.y;
                                }
                            }
                            // Co.blueFirst = 'blue';
                            //fb not socket
                            FB.ui({
                                method: 'apprequests',
                                message: 'request-eat',
                                data: [{
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
                                    chessesPos: 13,
                                    chessesValue: this.sprite.STEP,
                                    chessesType: this.sprite.type
                                }],
                                to: Co.idBlue,
                                action_type: 'turn'
                            }, function (response)  {
                                if(response.error_message == undefined){                                    
                                    for (i = 0; i < Co.chesses.length; i++) {
                                        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y)&&(Co.chesses[i].sprite.type =='blue')) {
                                            // console.log(Co.chesses[i]);
                                            // console.log(Co.chesses[i]);
                                            Co.chesses[i].sprite.kill();
                                            if (Co.blueFirst == "blue") Co.ateList.blue.push(Co.chesses[i]);
                                            if (Co.blueFirst == "red") Co.ateList.red.push(Co.chesses[i]);
                                            Co.chesses.splice(i, 1);
                                        }
                                    };                                    
                                    if (Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] === 10) {
                                        Co.pointRedNow += 100;
                                    } else {
                                        Co.pointRedNow += Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100];
                                    }
                                    Co.chessesPos[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] = 13;
                                    Co.chessesPos[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100] = 0;
                                    Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] = Co.chessesValue[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100];
                                    Co.chessesValue[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100] = 0;
                                    Co.chessesType[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] = Co.chessesType[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100];
                                    Co.chessesType[(Co.prevPosInEat.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(Co.prevPosInEat.x - 50) / 100] = 0;                                    
                                    Co.blueFirst = 'blue';
                                }
                                if(response.error_message !== undefined){
                                    for (i = 0; i < Co.chesses.length; i++) {
                                        if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y)&&(Co.chesses[i].sprite.type =='red')) {
                                            // console.log(Co.chesses[i]);
                                            // console.log(Co.chesses[i]);
                                            Co.chesses[i].sprite.position.x = Co.prevPosInEat.x;
                                            Co.chesses[i].sprite.position.y = Co.prevPosInEat.y;
                                            Co.chesses[i].x = Co.prevPosInEat.x;
                                            Co.chesses[i].y = Co.prevPosInEat.y;
                                        }
                                    };
                                    Co.blueFirst = 'red';
                                }
                            });
                            break;
                        }
                    }
                }
                else {
                    // console.log("kidding me?");
                }
                // else todo
            });
        }
    }
}