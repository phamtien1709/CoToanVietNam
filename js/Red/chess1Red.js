class chess1Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red1');
        this.sprite.STEP = 1;
        this.sprite.type = 'red';
    }
}