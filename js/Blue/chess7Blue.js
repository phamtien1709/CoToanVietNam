class chess7Blue extends ChessController {
    constructor(x, y, spriteName){
        super(x, y, 'blue7');
        this.sprite.STEP = 7;
        this.sprite.type = 'blue';
    }
}