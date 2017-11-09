class chess8Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue8');
        this.sprite.STEP = 8;
        this.sprite.type = 'blue';
    }
}