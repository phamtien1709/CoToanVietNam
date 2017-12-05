var game = new Phaser.Game(900,1100, Phaser.CANVAS, 'phaser-example', { create: create });

function create() {
    console.log(25%2);

    game.stage.backgroundColor = '#0072bc';

	var style = { font: "30px Arial",
  fill: "white",
  boundsAlignH: "center",
  boundsAlignV: "middle",
  wordWrap: true, wordWrapWidth: 100 };

    var text = game.add.text(game.world.centerX, game.world.centerY, "pha ser wi th a sp rin kle of pi xi du st", style);

    text.anchor.set(0.5);

}