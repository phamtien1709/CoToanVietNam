class chess10Red extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'red10');
        this.sprite.STEP = 0;
        this.sprite.type = 'red';
    }
}