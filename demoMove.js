
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    //  Using Phasers asset loader we load up a PNG from the assets folder
    game.load.image('sprite', 'Assets/Loading/quanCoTo.png');
    game.load.image('container', 'Assets/Bandau/test.png');

}
/*
this.container.input.boundsRect = new Phaser.Rectangle(this.x, this.game.height - updatedHeight 
    , this.containerWrap.width, this.container.height * 2 - this.game.height );
*/
var sprite;
var bg;
function create() {
    bounds = new Phaser.Rectangle(100, 100, 100, 400);

    // //  Create a graphic so you can see the bounds

    game.stage.backgroundColor = 'rgb(255,255,255)';

    var containerSprite = game.add.sprite(300, 100, 'container');
    var scrollMask = game.add.graphics(0, 0);
    scrollMask.beginFill();
    scrollMask.drawRect(300, 100, 225, 400);
    scrollMask.endFill();
    containerSprite.mask = scrollMask;
    // containerSprite.addChild(sprite);
    containerSprite.inputEnabled = true;
    containerSprite.input.boundsRect = new Phaser.Rectangle(300, 0, 225, 800);
    containerSprite.input.enableDrag();
    // console.log(game.height);
    containerSprite.input.allowHorizontalDrag = false;
    for (i = 0; i < 10; i++) {
        // console.log(containerSprite.height);
        var spriteChild = game.make.sprite(100, i * 50, 'sprite');
        spriteChild.scale.set(0.25);
        containerSprite.addChild(spriteChild);
    }

}

function render() {

    game.debug.inputInfo(32, 32);
    game.debug.spriteInputInfo(sprite, 300, 32);

}
