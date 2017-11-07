class chess4Red {
    constructor(x, y){
        this.x = x*100 + 50;
        this.y = y*100 + 50;
        this.sprite = Co.chessGroup.create(this.x, this.y, 'red4');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.STEP = 4;
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
                return Co.onMouseDown = false;
            }
        }, this);
    }
    update() {
    }
    offDirect(){
        let direct;
        for(direct in Co.directGroup){
            Co.directGroup[direct].destroy();
        }
        Co.directGroup = [];
        console.log(Co.directGroup);
        Co.chonco.destroy();
        this.resetArr(Co.directsP);
    }
    direct() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }))
    }
    resetArr(arr) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
    }
}