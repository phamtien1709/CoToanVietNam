class chess10Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red10');
        this.sprite.STEP = 0;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50 - Co.configs.HEAD_HEIGHT)/100][(this.x - 50)/100] = 13;
    }
}