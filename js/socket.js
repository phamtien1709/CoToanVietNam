// import { setTimeout } from "timers";

var socket = io("192.168.11.57:6969");

socket.on("server-call-user-out", (data) => {
    // console.log(Co.redWin, Co.blueWin, Co.deuceGame);
    if (data === "blue") {
        Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Đối phương đã rời khỏi\n                bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.redWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
    if (data === "red") {
        Co.game.add.text(Co.game.world.centerX - 180, Co.game.world.centerY + 560, "Đối phương đã rời khỏi\n                 bàn", { font: "35px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" });
        Co.blueWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
});

socket.on("timeout_blue", (data) => {
    if (data === "blue") {
        Co.redWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
});

socket.on("timeout_red", (data) => {
    if (data === "red") {
        Co.blueWin = true;
        setTimeout(function () {
            Co.game.state.start('win');
        }, 1200);
    }
});
socket.on("chat_callback", (data) => {
    // console.log(Co.tooltipBlue);
    if (data.color == "blue") {
        Co.textTooltipBlue.setText(data.text);
        Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
        setTimeout(function () {
            Co.game.add.tween(Co.tooltipBlue.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        }, 3000);
    }
    if (data.color == "red") {
        Co.textTooltipRed.setText(`${data.text}`);
        Co.game.add.tween(Co.tooltipRed.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Linear.None, true);
        setTimeout(function () {
            Co.game.add.tween(Co.tooltipRed.scale).to({ x: 0, y: 0 }, 350, Phaser.Easing.Linear.None, true);
        }, 3000);
    }
});
var ok = 0;
socket.on("leave-room-callback", (data) => {
    socket.emit("start", {
        join: 1
    });
    socket.on("server-send-data", (data) => {
        ok = data;
        // this.start(ok);
    });
});
