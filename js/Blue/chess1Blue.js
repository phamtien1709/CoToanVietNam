class chess1Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue1');
        this.sprite.STEP = 1;
        this.sprite.type = 'blue';
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 12;
    }
}