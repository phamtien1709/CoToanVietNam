class chess4Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue4');
        this.sprite.STEP = 4;
        this.sprite.type = 'blue';
        Co.chessesPos[(this.y - 50 - Co.configs.HEAD_HEIGHT)/100][(this.x - 50)/100] = 12;
    }
}