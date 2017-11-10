class chess4Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red4');
        this.sprite.STEP = 4;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 13;
    }
}