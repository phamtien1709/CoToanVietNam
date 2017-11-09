class chess9Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue9');
        this.sprite.STEP = 9;
        this.sprite.type = 'blue';
    }
}