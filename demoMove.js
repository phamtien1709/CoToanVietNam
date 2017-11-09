
// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

// function preload() {

//     game.load.image('kirito', 'Assets/Bandau/codo8.png');
//     game.load.image('asuna', 'Assets/Bandau/codo8.png');

// }

// var text;
// var tweenA;
// var tweenB;

// function create() {

//     game.renderer.renderSession.roundPixels = true;
//     game.stage.backgroundColor = '#124184';

//     game.add.text(16, 16, "Tween Chain Demo", { font: "16px Arial", fill: "#ffffff" });
//     text = game.add.text(680, 16, "Click to Start", { font: "16px Arial", fill: "#ffffff" });

//     game.spriteA = game.add.sprite(64, 100, 'kirito');
//     game.spriteA.anchor.set(0.5);
//     var spriteB = game.add.sprite(64, 300, 'asuna');

//     tweenB = game.add.tween(spriteB).to( { x: 600 }, 2000, "Quart.easeOut");

//     // tweenA.chain(tweenB);

//     game.input.onDown.addOnce(start, this);

// }

// function start() {
//     console.log(game.input.activePointer.position);
//     let x1 = game.input.activePointer.position.x;
//     let y1 = game.input.activePointer.position.y;
//     tweenA = game.add.tween(game.spriteA).to( { x: x1, y:y1 }, 2000, "Quart.easeOut");
//     tweenA.anchor = new Phaser.Point(0.5, 0.5);
//     tweenA.start();

//     text.visible = false;

// }
