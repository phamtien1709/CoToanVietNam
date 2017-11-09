class chess2Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red2');
        this.sprite.STEP = 2;
        this.sprite.type = 'red';
    }
}