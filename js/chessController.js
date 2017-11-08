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
            if(Co.onMouseDown == false){
                console.log("In");
                this.direct();
                return Co.onMouseDown = true;
            }
            if(Co.onMouseDown == true){
                console.log("Out");
                this.offDirect();
            }
        }, this);
        this.sprite.update = this.update.bind(this);        
    }
    update() {
        // if(Co.directGroup[1] !== undefined){
        //     // console.log("dir");
        //     Co.directGroup[1].events.onInputDown.add(()=>{
        //         console.log("dir");
                // Co.tweenChonco = Co.game.add.tween(this.sprite).to( { x: Co.directGroup[1].position.x + 50 -this.x, y:Co.directGroup[1].position.y + 50 -this.y}, 2000, "Quart.easeOut");
                // Co.tweenChonco.start();
        //     }, this)
        // }

    }
    offDirect(){
        let dir;
        for(i=0; i< Co.directGroup.length; i++){
            Co.directGroup[i].destroy();
        }
        Co.directGroup = [];
        Co.exam.destroy();
        Co.exam = [];
        console.log(Co.exam);
        Co.chonco.destroy();
        this.resetArr(Co.directsP);
        return Co.onMouseDown = false;
    }
    direct() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }));
        console.log(Co.directGroup[2].events);
        Co.directGroup[2].events.onInputDown.add(()=>{
            Co.tweenChonco = Co.game.add.tween(this.sprite).to( { x: Co.exam.position.x, y:Co.exam.position.y}, 600, "Quart.easeOut");
            Co.tweenChonco.start();
            this.x = Co.exam.position.x;
            this.y = Co.exam.position.y;
            this.offDirect();
        }
        )
    }
    resetArr(arr) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
    }
}