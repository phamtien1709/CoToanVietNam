class chess7Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue7');
        this.sprite.STEP = 7;
        this.sprite.type = 'blue';
        Co.chessesPos[(this.y - 50 - Co.configs.HEAD_HEIGHT)/100][(this.x - 50)/100] = 12;
    }
}