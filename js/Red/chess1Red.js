class chess1Red {
    constructor(x, y){
        this.x = x*100 + 50;
        this.y = y*100 + 50;
        this.sprite = Co.chessGroup.create(this.x, this.y, 'red1');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.STEP = 1;
        this.sprite.update = this.update.bind(this);
    }
    update(){
        if(Co.game.input.mousePointer.isDown){
            if((this.x - 50 < Co.game.input.mousePointer.position.x) && (this.x + 50 >Co.game.input.mousePointer.position.x)){
                if((this.y - 50 < Co.game.input.mousePointer.position.y) &&(Co.game.input.mousePointer.position.y < this.y + 50)){
                    this.direct();
                }
            }
        }
    }
    direct(){
        Co.directs.push(new directPoint(this.x, this.y, {
            step : this.sprite.STEP
        }))
    }
}