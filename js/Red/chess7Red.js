class chess7Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red7');
        this.sprite.STEP = 7;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 13;
    }
}