class chess5Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red5');
        this.sprite.STEP = 5;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 13;
    }
}