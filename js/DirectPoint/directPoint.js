class directPoint {
    constructor(x, y, configs) {
        this.x = 39;
        this.y = 38.5;
        this.x1 = x;
        this.y1 = y;
        this.configs = configs;
        Co.chonco = Co.game.add.sprite(x, y, 'chonco');
        Co.chonco.anchor = new Phaser.Point(0.5, 0.5);
        for (i = 0; i <= this.configs.step; i++) {
            if ((0.01 * x + i) < 9) {
                Co.directsP[0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5] = 11;
            }
            if ((0.01 * x - i) > 0) {
                Co.directsP[0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5] = 11;
            }
            if ((0.01 * y - i - Co.configs.HEAD_HEIGHT / 100) > 0) {
                Co.directsP[0.01 * y - i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - 0.5] = 11;
            }
            if ((0.01 * y + i - Co.configs.HEAD_HEIGHT / 100) < 11) {
                Co.directsP[0.01 * y + i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - 0.5] = 11;
            }
            if ((0.01 * x + i < 9) && (0.01 * y + i - Co.configs.HEAD_HEIGHT / 100 < 11)) {
                Co.directsP[0.01 * y + i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5] = 11;
            }
            if ((0.01 * x - i > 0) && (0.01 * y - i - Co.configs.HEAD_HEIGHT / 100 > 0)) {
                Co.directsP[0.01 * y - i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5] = 11;
            }
            if ((0.01 * x + i < 9) && (0.01 * y - i - Co.configs.HEAD_HEIGHT / 100 > 0)) {
                Co.directsP[0.01 * y - i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5] = 11;
            }
            if ((0.01 * x - i > 0) && (0.01 * y + i - Co.configs.HEAD_HEIGHT / 100 < 11)) {
                Co.directsP[0.01 * y + i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5] = 11;
            }
        }
        for (i = 0; i < 11; i++) {
            let k;
            for (k = 0; k < Co.chessesPos[i].length; k++) {
                if ((Co.directsP[i][k] == 11) && (Co.chessesPos[i][k] == 12)) {
                    Co.directsP[i][k] = 0;
                }
                if ((Co.directsP[i][k] == 11) && (Co.chessesPos[i][k] == 13)) {
                    Co.directsP[i][k] = 0;
                }
            }
        }
        for (i = 0; i <= this.configs.step; i++) {
            if ((0.01 * x + i) < 9) {
                if (((0.01 * x + i - 0.5 - 1) > (0.01 * x - 0.5))) {
                    if (Co.directsP[0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5 - 1] == 0) {
                        Co.directsP[0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * x - i) > 0) {
                if ((0.01 * x - i - 0.5 + 1) < (0.01 * x - 0.5)) {
                    if (Co.directsP[0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5 + 1] == 0) {
                        Co.directsP[0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * y - i - Co.configs.HEAD_HEIGHT / 100) > 0) {
                if ((0.01 * y - i - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100) < (0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100)) {
                    if (Co.directsP[0.01 * y - i - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - 0.5] == 0) {
                        Co.directsP[0.01 * y - i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * y + i - Co.configs.HEAD_HEIGHT / 100) < 11) {
                if ((0.01 * y + i - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100) > (0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100)) {
                    if (Co.directsP[0.01 * y + i - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - 0.5] == 0) {
                        Co.directsP[0.01 * y + i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * x + i < 9) && (0.01 * y + i - Co.configs.HEAD_HEIGHT / 100 < 11)) {
                if (((0.01 * y + i - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100) > (0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100)) && ((0.01 * x + i - 0.5 - 1) > (0.01 * x - 0.5))) {
                    if (Co.directsP[0.01 * y + i - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5 - 1] == 0) {
                        Co.directsP[0.01 * y + i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * x - i > 0) && (0.01 * y - i - Co.configs.HEAD_HEIGHT / 100 > 0)) {
                if (((0.01 * y - i - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100) < (0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100)) && ((0.01 * x - i - 0.5 + 1) < (0.01 * x - 0.5))) {
                    if (Co.directsP[0.01 * y - i - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5 + 1] == 0) {
                        Co.directsP[0.01 * y - i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * x + i < 9) && (0.01 * y - i - Co.configs.HEAD_HEIGHT / 100 > 0)) {
                if (((0.01 * y - i - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100) < (0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100)) && ((0.01 * x + i - 0.5 - 1) > (0.01 * x - 0.5))) {
                    if (Co.directsP[0.01 * y - i - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5 - 1] == 0) {
                        Co.directsP[0.01 * y - i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x + i - 0.5] = 0;
                    }
                }
            }
            if ((0.01 * x - i > 0) && (0.01 * y + i - Co.configs.HEAD_HEIGHT / 100 < 11)) {
                if (((0.01 * y + i - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100) > (0.01 * y - 0.5 - Co.configs.HEAD_HEIGHT / 100)) && ((0.01 * x - i - 0.5 + 1) < (0.01 * x - 0.5))) {
                    if (Co.directsP[0.01 * y + i - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5 + 1] == 0) {
                        Co.directsP[0.01 * y + i - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * x - i - 0.5] = 0;
                    }
                }
            }
        }
        for (i = 0; i < Co.directsP.length; i++) {
            for (j = 0; j < Co.directsP[i].length; j++) {
                if (Co.directsP[i][j] == 11) Co.directGroup.push(Co.game.add.sprite(j * 100 + this.x, i * 100 + this.y + Co.configs.HEAD_HEIGHT, 'huongdi'));
            }
        }
        for (i = 0; i < Co.directGroup.length; i++) {
            Co.directGroup[i].inputEnabled = true;
        }
        //xác định fields quanh 8 ô, tính các nước ăn theo step.
        this.findObNear();
        // console.log(Co.SUM);
        // console.log(0.01*this.x1 -0.5, 0.01*this.y1-0.5);
        // console.log(Co.posKillGroup);
        for (i in Co.posKillGroup) {
            Co.killGroup.push(Co.game.add.sprite(Co.posKillGroup[i].x * 100 + 19.5, Co.posKillGroup[i].y * 100 + 19.5 + Co.configs.HEAD_HEIGHT, 'oAnDuoc'));
        }
        for (i in Co.killGroup) {
            Co.killGroup[i].inputEnabled = true;
        }
        // defined pheps cộng trc
        // hiện nước ăn
        //update is test function!!!!
        // this.update();
    }
    // update() {
    //     console.log(Co.directGroup);
    //     console.log(Co.chessesPos);
    //     console.log(Co.chessesType);
    //     console.log(Co.chessesValue);
    // }
    //tìm quân cờ nằm cạnh quân đã chọn
    findObNear() {
        //SUMTOEAT--------------------------------------------
        function sumToEat(cmp1, cmp2, add1, add2, posx, posy, posx1, posy1) {
            if (cmp1 === cmp2) {
                // console.log("Same");
                let sumx;
                let canEat = true;
                let sumy;
                if (add1 == 10) add1 = 0;
                //top left
                if ((posx > posx1) && (posy > posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 - i >= 0 && (posy1 - i) >= 0)) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1 - i][posx1 - i] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1 - i][posx1 - i] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = -add1 - add2 - 1;
                        sumy = -add1 - add2 - 1;
                    };
                }
                //top
                if ((posx == posx1) && (posy > posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 >= 0 && (posy1 - i) >= 0 && (posx1 < 9))) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1 - i][posx1] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1 - i][posx1] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = 0;
                        sumy = -add1 - add2 - 1;
                    };
                }
                //top right
                if ((posx < posx1) && (posy > posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 + i < 9) && (posy1 - i) >= 0) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1 - i][posx1 + i] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1 - i][posx1 + i] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = add1 + add2 + 1;
                        sumy = -add1 - add2 - 1;
                    };
                }
                //right
                if ((posx < posx1) && (posy == posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 + i < 9) && (posy1) >= 0 && (posy1 < 11)) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1][posx1 + i] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1][posx1 + i] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = add1 + add2 + 1;
                        sumy = 0;
                    };
                }
                //bot right
                if ((posx < posx1) && (posy < posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 + i < 9) && ((posy1 + i < 11))) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1 + i][posx1 + i] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1 + i][posx1 + i] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = add1 + add2 + 1;
                        sumy = add1 + add2 + 1;
                    };
                }
                //bot
                if ((posx == posx1) && (posy < posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 < 9) && (posx1 >= 0) && ((posy1 + i < 11))) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1 + i][posx1] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1 + i][posx1] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = 0;
                        sumy = add1 + add2 + 1;
                    };
                }
                //bot left
                if ((posx > posx1) && (posy < posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 - i >= 0) && ((posy1 + i < 11))) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1 + i][posx1 - i] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1 + i][posx1 - i] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = -add1 - add2 - 1;
                        sumy = add1 + add2 + 1;
                    };
                }
                //left
                if ((posx > posx1) && (posy == posy1)) {
                    for (i = 0; i <= add1 + add2; i++) {
                        if ((posx1 - i >= 0) && ((posy1 < 11) && (posy1 >= 0))) {
                            if (i > 0) {
                                if (Co.chessesValue[posy1][posx1 - i] !== 0) {
                                    if (i == add1 + add2) {
                                        if (Co.chessesType[posy1][posx1 - i] !== Co.chessesType[posy1][posx1]) {
                                            canEat = true;
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        canEat = false;
                                    }
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                    if (canEat) {
                        sumx = -add1 - add2 - 1;
                        sumy = 0;
                    };
                }
                if ((0 <= posx + sumx) && (9 > posx + sumx) && (posy + sumy >= 0) && (posy + sumy < 11)) {
                    Co.posKillGroup.push({
                        x: posx + sumx,
                        y: posy + sumy
                    });
                }
            }
            else {
                // console.log("not same");
            }
        }
        //SUMTOEAT--------------------------------------------
        //SUB TO EAT------------------------------------------
        function subToEat(cmp1, cmp2, sub1, sub2, posx, posy, posx1, posy1) {
            if (cmp1 === cmp2) {
                // console.log("Same");
                let subx;
                let canEat = true;
                let suby;
                if (sub1 == 10) sub1 = 0;
                if (sub2 > sub1) {
                    //top left
                    if ((posx > posx1) && (posy > posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 - i >= 0 && (posy1 - i) >= 0)) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1 - i][posx1 - i] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1 - i][posx1 - i] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = -sub2 + sub1 - 1;
                            suby = -sub2 + sub1 - 1;
                        };
                    }
                    //top
                    if ((posx == posx1) && (posy > posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 >= 0 && (posy1 - i) >= 0 && (posx1 < 9))) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1 - i][posx1] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1 - i][posx1] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = 0;
                            suby = -sub2 + sub1 - 1;
                        };
                    }
                    //top right
                    if ((posx < posx1) && (posy > posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 + i < 9) && (posy1 - i) >= 0) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1 - i][posx1 + i] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1 - i][posx1 + i] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = sub2 - sub1 + 1;
                            suby = -sub2 + sub1 - 1;
                        };
                    }
                    //right
                    if ((posx < posx1) && (posy == posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 + i < 9) && (posy1) >= 0 && (posy1 < 11)) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1][posx1 + i] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1][posx1 + i] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = sub2 - sub1 + 1;
                            suby = 0;
                        };
                    }
                    //bot right
                    if ((posx < posx1) && (posy < posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 + i < 9) && ((posy1 + i < 11))) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1 + i][posx1 + i] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1 + i][posx1 + i] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = sub2 - sub1 + 1;
                            suby = sub2 - sub1 + 1;
                        };
                    }
                    //bot
                    if ((posx == posx1) && (posy < posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 < 9) && (posx1 >= 0) && ((posy1 + i < 11))) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1 + i][posx1] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1 + i][posx1] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = 0;
                            suby = sub2 - sub1 + 1;
                        };
                    }
                    //bot left
                    if ((posx > posx1) && (posy < posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 - i >= 0) && ((posy1 + i < 11))) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1 + i][posx1 - i] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1 + i][posx1 - i] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = -sub2 + sub1 - 1;
                            suby = sub2 - sub1 + 1;
                        };
                    }
                    //left
                    if ((posx > posx1) && (posy == posy1)) {
                        for (i = 0; i <= sub2 - sub1; i++) {
                            if ((posx1 - i >= 0) && ((posy1 < 11) && (posy1 >= 0))) {
                                if (i > 0) {
                                    if (Co.chessesValue[posy1][posx1 - i] !== 0) {
                                        if (i == sub2 - sub1) {
                                            if (Co.chessesType[posy1][posx1 - i] !== Co.chessesType[posy1][posx1]) {
                                                canEat = true;
                                            } else {
                                                canEat = false;
                                            }
                                        } else {
                                            canEat = false;
                                        }
                                    } else {
                                        continue;
                                    }
                                }
                            }
                        }
                        if (canEat) {
                            subx = -sub2 + sub1 - 1;
                            suby = 0;
                        };
                    }
                    if ((0 <= posx + subx) && (9 > posx + subx) && (posy + suby >= 0) && (posy + suby < 11)) {
                        Co.posKillGroup.push({
                            x: posx + subx,
                            y: posy + suby
                        });
                    }
                }
                else{

                }
            }
            else {
                // console.log("not same");
            }
        }
        //SUB TO EAT------------------------------------------
        //tìm các quân cờ xung quanh
        if (((0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100 >= 0) && ((0.01 * this.x1 - 0.5 - 1) >= 0))) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1]) !== 0) {
                // console.log("Top Left");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 - 1,
                    0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 - 1,
                    0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if ((0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100 >= 0)) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5]) !== 0) {
                // console.log("Top");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if (((0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100) >= 0) && ((0.01 * this.x1 - 0.5 + 1) < 9)) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1]) !== 0) {
                // console.log("Top Right");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 + 1,
                    0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 + 1,
                    0.01 * this.y1 - 0.5 - 1 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if ((0.01 * this.x1 - 0.5 + 1) < 9) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1]) !== 0) {
                // console.log("Right");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 + 1,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 + 1,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if (((0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100) <= 10) && ((0.01 * this.x1 - 0.5 + 1) < 9)) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1]) !== 0) {
                // console.log("Bot Right");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 + 1,
                    0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 + 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 + 1,
                    0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if ((0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100) <= 10) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5]) !== 0) {
                // console.log("Bot");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if (((0.01 * this.x1 - 0.5 - 1) >= 0) && ((0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100) <= 10)) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1]) !== 0) {
                // console.log("Bot Left");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 - 1,
                    0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 - 1,
                    0.01 * this.y1 - 0.5 + 1 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        if ((0.01 * this.x1 - 0.5 - 1) >= 0) {
            if ((Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1]) !== 0) {
                // console.log("Left");
                sumToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 - 1,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100
                );
                subToEat(
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesType[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100][0.01 * this.x1 - 0.5],
                    0.01 * this.x1 - 0.5,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100,
                    0.01 * this.x1 - 0.5 - 1,
                    0.01 * this.y1 - 0.5 - Co.configs.HEAD_HEIGHT / 100
                );
            };
        }
        // console.log(Co.posKillGroup);    
    }
}