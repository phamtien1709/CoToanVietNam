class chess5Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue5');
        this.sprite.STEP = 5;
        this.sprite.type = 'blue';
    }
}