class chess6Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue6');
        this.sprite.STEP = 6;
        this.sprite.type = 'blue';
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 12;
    }
}