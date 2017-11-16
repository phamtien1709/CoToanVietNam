class chess9Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red9');
        this.sprite.STEP = 9;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50 - Co.configs.HEAD_HEIGHT)/100][(this.x - 50)/100] = 13;
    }
}