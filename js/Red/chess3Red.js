class chess3Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red3');
        this.sprite.STEP = 3;
        this.sprite.type = 'red';
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 13;
    }
}