
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('kirito', 'Assets/Bandau/codo8.png');
    game.load.image('asuna', 'Assets/Bandau/codo8.png');

}

var text;
var tweenA;
var tweenB;

function create() {

    game.renderer.renderSession.roundPixels = true;
    game.stage.backgroundColor = '#124184';

    game.add.text(16, 16, "Tween Chain Demo", { font: "16px Arial", fill: "#ffffff" });
    text = game.add.text(680, 16, "Click to Start", { font: "16px Arial", fill: "#ffffff" });

    var spriteA = game.add.sprite(64, 100, 'kirito');
    var spriteB = game.add.sprite(64, 300, 'asuna');

    tweenA = game.add.tween(spriteA).to( { x: 300, y:400 }, 2000, "Quart.easeOut");
    tweenB = game.add.tween(spriteB).to( { x: 600 }, 2000, "Quart.easeOut");

    // tweenA.chain(tweenB);

    game.input.onDown.addOnce(start, this);

}

function start() {

    tweenA.start();

    text.visible = false;

}
