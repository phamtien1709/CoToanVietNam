class chess8Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red8');
        this.sprite.STEP = 8;
        this.sprite.type = 'red';
    }
}