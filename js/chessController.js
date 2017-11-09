class ChessController{
    constructor(x, y, spriteName){
        this.x = x*100 + 50;
        this.y = y*100 + 50;
        this.sprite = Co.chessGroup.create(this.x, this.y, spriteName);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 12;
        this.sprite.inputEnabled = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.events.onInputDown.add(function () {
            console.log(this.sprite.type);
            if(Co.onMouseDown == false){
                this.direct();
                return Co.onMouseDown = true;
            }
            if(Co.onMouseDown == true){
                this.offDirect();
            }
        }, this);
        this.sprite.update = this.update.bind(this);        
    }
    update() {
    }
    offDirect(){
        let dir;
        for(i=0; i< Co.directGroup.length; i++){
            Co.directGroup[i].destroy();
        }
        Co.directGroup = [];
        Co.chonco.destroy();
        this.resetArr(Co.directsP);
        return Co.onMouseDown = false;
    }
    direct() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }));
        for(i=0; i<Co.directGroup.length; i++){
            Co.directGroup[i].events.onInputDown.add((i)=>{
                Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 0;                
                Co.exam = {
                    x : 0,
                    y : 0
                };
                Co.exam.anchor = new Phaser.Point(0.5, 0.5);
                Co.exam.x = i.position.x + 50 - 39;
                Co.exam.y = i.position.y + 50 - 38.5;
                Co.tweenChonco = Co.game.add.tween(this.sprite).to( 
                    { 
                        x : Co.exam.x, 
                        y : Co.exam.y 
                    }, 600, "Quart.easeOut");
                Co.tweenChonco.start();
                Co.chessesPos[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = 12;
                this.x = Co.exam.x;
                this.y = Co.exam.y;
                this.offDirect();
            });
        };
    }
    resetArr(arr) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
    }
}