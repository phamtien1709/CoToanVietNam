class chess6Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red6');
        this.sprite.STEP = 6;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50 - Co.configs.HEAD_HEIGHT)/100][(this.x - 50)/100] = 13;
    }
}