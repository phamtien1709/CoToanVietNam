var realTime = 0;
var oldRequest;
// setTimeout(function(){
setInterval(function () {
    // console.log(realTime);
    realTime++;
    // console.log(realTime);
    // if ((realTime % 5 == 0) && (realTime > 0)) {
    if ((Co.runInterval !== undefined)) {
        //check play
        if (Co.checkPlay) {
            if ((realTime % 6 == 0) && (realTime > 0)) {
                console.log(realTime);
                if (Co.checkId == Co.idBlue) {
                    if (Co.blueFirst == 'blue') {
                        alert('You spend a lot time for turn. You must LOSE!');
                        Co.redWin = true;
                        Co.game.state.start('win');
                    }
                    if (Co.blueFirst == 'red') {
                        alert('Your competitor spend alot time for turn. You WIN!');
                        Co.blueWin = true;
                        Co.game.state.start('win');
                    }
                }
                if (Co.checkId == Co.idRed) {
                    if (Co.blueFirst == 'blue') {
                        alert('Your competitor spend alot time for turn. You WIN!');
                        Co.redWin = true;
                        Co.game.state.start('win');
                    }
                    if (Co.blueFirst == 'red') {
                        alert('You spend a lot time for turn. You must LOSE!');
                        Co.blueWin = true;
                        Co.game.state.start('win');
                    }
                }
            }
        }
        $.ajax({
            type: "GET",
            url: `https://graph.facebook.com/me/apprequests?access_token=${Co.accessToken}`,
            success: function (data) {
                if (oldRequest !== data.data[0].id) {
                    realTime = 0;
                    oldRequest = data.data[0].id;
                    //invite
                    if (data.data[0].message == 'invite-player') {
                        var json = JSON.parse(data.data[0].data);
                        console.log(json);
                        var person = prompt(`${json.name} invite you!(yes/no)\n + : ${json.math[0]}\n - : ${json.math[1]}\n x : ${json.math[2]}\n / : ${json.math[3]}\n % : ${json.math[4]}`);
                        // console.log(person);
                        if (person !== null) {
                            if (person.toLowerCase() === 'yes') {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'agree-invite',
                                        to: json.id,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB
                                        }
                                    }, function (response) {
                                        console.log(response);
                                        if (response.error_message == undefined) {
                                            Co.idBlue = json.id;
                                            Co.idRed = Co.checkId;
                                            Co.chooseAdd = json.math[0];
                                            Co.chooseSub = json.math[1];
                                            Co.chooseMul = json.math[2];
                                            Co.chooseDiv = json.math[3];
                                            Co.chooseDivPer = json.math[4];
                                            Co.checkPlay = true;
                                            Co.game.state.start('play');
                                        }
                                    }
                                )
                            } else {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'disagree-invite',
                                        to: json.id,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB
                                        }
                                    }, function (response) {
                                        console.log(response);
                                    }
                                )
                            }
                        } else {
                            FB.ui(
                                {
                                    method: 'apprequests',
                                    message: 'disagree-invite',
                                    to: json.id,
                                    data: {
                                        id: Co.checkId,
                                        name: Co.nameFB
                                    }
                                }, function (response) {
                                    console.log(response);
                                }
                            )
                        }
                    };
                    //agree
                    if (data.data[0].message == 'agree-invite') {
                        var json = JSON.parse(data.data[0].data);
                        Co.idBlue = Co.checkId;;
                        Co.idRed = json.id;
                        Co.game.state.start('play');
                    };
                    //disagree
                    if (data.data[0].message == 'disagree-invite') {
                        var json = JSON.parse(data.data[0].data);
                        alert(`${json.name} don't agree your invite!`)
                        Co.checkPlay = false;
                        Co.txt_waiting.kill();
                        Co.play_btn_batdau.revive();
                        Co.play_btn_chonpheptoan.revive();
                    };
                    //request move
                    if (data.data[0].message == 'request-move') {
                        var json = JSON.parse(data.data[0].data);
                        var obj = Co.chesses.find((obj) => {
                            if ((obj.x === json[0].positionPrev.x) && (obj.y === json[0].positionPrev.y)) {
                                return obj;
                            }
                        });
                        // console.log(obj);
                        for (i in Co.chesses) {
                            if ((Co.chesses[i].x == obj.x) && (Co.chesses[i].y == obj.y)) {
                                // console.log("move");
                                Co.chesses[i].sprite.position.x = json[0].positionAfter.x;
                                Co.chesses[i].sprite.position.y = json[0].positionAfter.y;
                                Co.chesses[i].x = json[0].positionAfter.x;
                                Co.chesses[i].y = json[0].positionAfter.y;
                            }
                        }
                        //lawps gias trij
                        Co.chessesPos[json[0].positionPrevOnMatrix.y][json[0].positionPrevOnMatrix.x] = 0;
                        Co.chessesValue[json[0].positionPrevOnMatrix.y][json[0].positionPrevOnMatrix.x] = 0;
                        Co.chessesType[json[0].positionPrevOnMatrix.y][json[0].positionPrevOnMatrix.x] = 0;
                        Co.chessesPos[json[0].positionAfterOnMatrix.y][json[0].positionAfterOnMatrix.x] = json[0].chessesPos;
                        Co.chessesValue[json[0].positionAfterOnMatrix.y][json[0].positionAfterOnMatrix.x] = json[0].chessesValue;
                        Co.chessesType[json[0].positionAfterOnMatrix.y][json[0].positionAfterOnMatrix.x] = json[0].chessesType;
                        Co.blueFirst = json[0].turn;
                    }
                    //request-eat
                    if (data.data[0].message == 'request-eat') {
                        var json = JSON.parse(data.data[0].data);
                        var obj = Co.chessGroup.children.find((obj) => {
                            if ((obj.x === json[0].posReal.x) && (obj.y === json[0].posReal.y)) {
                                return obj;
                            }
                        });
                        // console.log(obj);
                        for (i = 0; i < Co.chesses.length; i++) {
                            if ((Co.chesses[i].x == obj.position.x) && (Co.chesses[i].y == obj.position.y)) {
                                // console.log(Co.chesses[i]);
                                Co.chesses[i].sprite.kill();
                                if (json[0].chessesType == "blue") Co.ateList.blue.push(Co.chesses[i]);
                                if (json[0].chessesType == "red") Co.ateList.red.push(Co.chesses[i]);
                                Co.chesses.splice(i, 1);
                                // Co.chesses[i].destroy();
                                // Co.chesses[i].sprite.destroy();
                            }
                        };
                        var obj2 = Co.chesses.find((obj) => {
                            if ((obj.x === json[0].positionPrev.x) && (obj.y === json[0].positionPrev.y)) {
                                return obj;
                            }
                        });
                        // console.log(obj);
                        for (i in Co.chesses) {
                            if ((Co.chesses[i].x == obj2.x) && (Co.chesses[i].y == obj2.y)) {
                                // console.log("move");
                                Co.chesses[i].sprite.position.x = json[0].positionAfter.x;
                                Co.chesses[i].sprite.position.y = json[0].positionAfter.y;
                                Co.chesses[i].x = json[0].positionAfter.x;
                                Co.chesses[i].y = json[0].positionAfter.y;
                            }
                        }
                        Co.chessesPos[json[0].positionPrevOnMatrix.y][json[0].positionPrevOnMatrix.x] = 0;
                        Co.chessesValue[json[0].positionPrevOnMatrix.y][json[0].positionPrevOnMatrix.x] = 0;
                        Co.chessesType[json[0].positionPrevOnMatrix.y][json[0].positionPrevOnMatrix.x] = 0;
                        Co.chessesPos[json[0].positionAfterOnMatrix.y][json[0].positionAfterOnMatrix.x] = json[0].chessesPos;
                        if (Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100] === 10) {
                            if (json[0].turn == "red") Co.pointBlueNow += 100;
                            if (json[0].turn == "blue") Co.pointRedNow += 100;
                        } else {
                            if (json[0].turn == "red") Co.pointBlueNow += Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100];
                            if (json[0].turn == "blue") Co.pointRedNow += Co.chessesValue[(obj.position.y - 50 - Co.configs.HEAD_HEIGHT) / 100][(obj.position.x - 50) / 100];
                        }
                        Co.chessesValue[json[0].positionAfterOnMatrix.y][json[0].positionAfterOnMatrix.x] = json[0].chessesValue;
                        Co.chessesType[json[0].positionAfterOnMatrix.y][json[0].positionAfterOnMatrix.x] = json[0].chessesType;
                        Co.blueFirst = json[0].turn;
                        // console.log(Co.chessesPos, Co.chessesValue, Co.chessesType);
                    }
                    //roi ban
                    if (data.data[0].message == 'get_out') {
                        var json = JSON.parse(data.data[0].data);
                        // console.log(json);
                        if (json.id === Co.idBlue) {
                            Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "XANH đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                            Co.redWin = true;
                            setTimeout(function () {
                                Co.game.state.start('win');
                            }, 1800);
                        }
                        if (json.id === Co.idRed) {
                            Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "ĐỎ đã rời khỏi bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                            Co.blueWin = true;
                            setTimeout(function () {
                                Co.game.state.start('win');
                            }, 1800);
                        }
                    }
                    //cau hoa
                    if (data.data[0].message == 'promise_deuce') {
                        var txt_answer_cauhoa = Co.game.make.text(-210, -50, "Đối thủ của bạn muốn cầu \nhòa, bạn có đồng ý không?", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                        var btn_yes_cauhoa = Co.game.make.button(-155, 180, 'yes_img');
                        btn_yes_cauhoa.anchor.set(0.5);
                        var btn_no_cauhoa = Co.game.make.button(155, 180, "no_img");
                        btn_no_cauhoa.anchor.set(0.5);
                        var popup_cauhoa = Co.game.add.sprite(Co.game.world.centerX, Co.game.world.centerY, 'gui_in_setting');
                        popup_cauhoa.alpha = 1;
                        popup_cauhoa.anchor.set(0.5);
                        popup_cauhoa.inputEnabled = true;
                        popup_cauhoa.input.enableDrag();
                        popup_cauhoa.scale.set(0);

                        popup_cauhoa.addChild(btn_yes_cauhoa);
                        popup_cauhoa.addChild(btn_no_cauhoa);
                        popup_cauhoa.addChild(txt_answer_cauhoa);

                        Co.game.add.tween(popup_cauhoa.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

                        btn_no_cauhoa.events.onInputDown.add(() => {
                            Co.game.add.tween(popup_cauhoa.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
                            // socket.emit("disagree_deuce", socket.id);
                            // FB.ui()
                            if (Co.checkId == Co.idBlue) {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'disagree_promise_deuce',
                                        to: Co.idRed,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB
                                        }
                                    }, function (response) {
                                        console.log(response);
                                    }
                                )
                            }
                            if (Co.checkId == Co.idRed) {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'disagree_promise_deuce',
                                        to: Co.idBlue,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB
                                        }
                                    }, function (response) {
                                        console.log(response);
                                    }
                                )
                            }
                        });
                        btn_yes_cauhoa.events.onInputDown.add(() => {
                            Co.game.add.tween(popup_cauhoa.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
                            //socket
                            // socket.emit("agree_promise_deuce", socket.id);
                            // FB.ui()
                            if (Co.checkId == Co.idBlue) {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'agree_promise_deuce',
                                        to: Co.idRed,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB,
                                            txt: "deuce"
                                        }
                                    }, function (response) {
                                        console.log(response);
                                        if (response.error_message == undefined) {
                                            Co.cauhoa_answer_agree = Co.game.add.text(Co.game.world.centerX - 190, Co.game.world.centerY + 560, "Bạn đồng ý", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                                            Co.deuceGame = true;
                                            setTimeout(function () {
                                                Co.game.state.start('win');
                                            }, 1200);
                                        }
                                    }
                                )
                            }
                            if (Co.checkId == Co.idRed) {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'agree_promise_deuce',
                                        to: Co.idBlue,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB,
                                            txt: "deuce"
                                        }
                                    }, function (response) {
                                        console.log(response);
                                        if (response.error_message == undefined) {
                                            Co.cauhoa_answer_agree = Co.game.add.text(Co.game.world.centerX - 190, Co.game.world.centerY + 560, "Bạn đồng ý", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                                            Co.deuceGame = true;
                                            setTimeout(function () {
                                                Co.game.state.start('win');
                                            }, 1200);
                                        }
                                    }
                                )
                            }
                        });
                    }
                    if (data.data[0].message == 'agree_promise_deuce') {
                        Co.cauhoa_answer_agree = Co.game.add.text(Co.game.world.centerX - 190, Co.game.world.centerY + 560, "Đối phương đồng ý", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                        Co.deuceGame = true;
                        setTimeout(function () {
                            Co.game.state.start('win');
                        }, 1200);
                    }
                    if (data.data[0].message == 'disagree_promise_deuce') {
                        Co.waiting.destroy();
                        Co.cauhoa_answer_disagree = Co.game.add.text(Co.game.world.centerX - 190, Co.game.world.centerY + 560, "Đối phương không đồng ý", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                        setTimeout(function () {
                            Co.cauhoa_answer_disagree.destroy();
                        }, 1800);
                    }
                    //xin thua
                    if (data.data[0].message == 'choose_lose') {
                        var json = JSON.parse(data.data[0].data);
                        // console.log(json);
                        if (json.id === Co.idBlue) {
                            Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "XANH đã xin xử thua", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                            Co.redWin = true;
                            setTimeout(function () {
                                Co.game.state.start('win');
                            }, 1800);
                        }
                        if (json.id === Co.idRed) {
                            Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "XANH đã xin xử thua", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
                            Co.blueWin = true;
                            setTimeout(function () {
                                Co.game.state.start('win');
                            }, 1800);
                        }
                    }
                    //choi lai
                    if (data.data[0].message == 'replay_request') {
                        var json = JSON.parse(data.data[0].data);
                        console.log(json);
                        prmt = prompt(`${json.name} want to replay? (yes/no)`)
                        if (prmt !== null) {
                            if (prmt.toLowerCase() === 'yes') {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'agree-replay',
                                        to: json.id,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB
                                        }
                                    }, function (response) {
                                        console.log(response);
                                        if (response.error_message == undefined) {
                                            Co.idBlue = json.id;
                                            Co.idRed = Co.checkId;
                                            Co.chooseAdd = json.math[0];
                                            Co.chooseSub = json.math[1];
                                            Co.chooseMul = json.math[2];
                                            Co.chooseDiv = json.math[3];
                                            Co.chooseDivPer = json.math[4];
                                            Co.checkPlay = true;
                                            Co.game.state.start('play');
                                        }
                                    }
                                )
                            } else {
                                FB.ui(
                                    {
                                        method: 'apprequests',
                                        message: 'disagree-replay',
                                        to: json.id,
                                        data: {
                                            id: Co.checkId,
                                            name: Co.nameFB
                                        }
                                    }, function (response) {
                                        console.log(response);
                                    }
                                )
                            }
                        } else {
                            FB.ui(
                                {
                                    method: 'apprequests',
                                    message: 'disagree-replay',
                                    to: json.id,
                                    data: {
                                        id: Co.checkId,
                                        name: Co.nameFB
                                    }
                                }, function (response) {
                                    console.log(response);
                                }
                            )
                        }
                    }
                    //agree
                    if (data.data[0].message == 'agree-replay') {
                        var json = JSON.parse(data.data[0].data);
                        Co.idBlue = Co.checkId;;
                        Co.idRed = json.id;
                        Co.game.state.start('play');
                    };
                    //disagree
                    if (data.data[0].message == 'disagree-replay') {
                        var json = JSON.parse(data.data[0].data);
                        alert(`${json.name} don't agree your request!`)
                        Co.checkPlay = false;
                        Co.win_txt_waiting.kill();
                        Co.win_btn_replay.revive();
                    };
                    //chat
                    if (data.data[0].message == 'user_chat') {
                        var json = JSON.parse(data.data[0].data);
                        // console.log(json);
                        if (json.id == Co.idBlue) {
                            Co.textTooltipBlue.setText(json.text);
                            Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
                            setTimeout(function () {
                                Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
                            }, 3000);
                        }
                        if (json.id == Co.idRed) {
                            Co.textTooltipRed.setText(json.text);
                            Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
                            setTimeout(function () {
                                Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
                            }, 3000);
                        }
                    }
                }
            }
        });
    }
    // };
}, 5000);
setInterval(function () {
    if ((Co.accessToken !== undefined)) {
        $.ajax({
            type: "GET",
            url: `https://graph.facebook.com/me/friends?access_token=${Co.accessToken}`,
            success: function (data) {
                Co.friends_profile = data.data;
            }
        });
    }
}, 5000);
// }, 5000);
// var odlData;

