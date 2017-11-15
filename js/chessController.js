class ChessController{
    constructor(x, y, spriteName){
        this.x = x*100 + 50;
        this.y = y*100 + 50;
        this.sprite = Co.chessGroup.create(this.x, this.y, spriteName);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.inputEnabled = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.events.onInputDown.add(function () {
            // console.log(Co.blueFirst);
            if(this.sprite.type == Co.blueFirst){
                if(!Co.onMouseDown){
                    if(Co.blueFirst == 'blue'){
                        this.directBlue();
                        // console.log(Co.chessesType);
                        // console.log(Co.chessesValue);
                        // console.log(Co.chessesPos);
                        return Co.onMouseDown = true;
                    }
                    if(Co.blueFirst == 'red'){
                        this.directRed();
                        // console.log(Co.chessesType);
                        // console.log(Co.chessesValue);
                        // console.log(Co.chessesPos);
                        return Co.onMouseDown = true;
                    }
                }
                if(Co.onMouseDown){
                    this.offDirect();
                }
            }
        }, this);
        this.sprite.update = this.update.bind(this);        
    }
    update() {
    }
    //trả lại hết giá trị khi đi xong
    offDirect(){
        for(i=0; i< Co.directGroup.length; i++){
            Co.directGroup[i].destroy();
        }
        for(i=0; i< Co.killGroup.length; i++){
            Co.killGroup[i].destroy();
        }
        Co.directGroup = [];
        Co.killGroup = [];
        Co.posKillGroup = [];
        Co.chonco.destroy();
        // console.log(Co.chessesPos);
        this.resetArr(Co.directsP);
        return Co.onMouseDown = false;
    }
    directBlue() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }));
        for(i=0; i<Co.directGroup.length; i++){
            Co.directGroup[i].events.onInputDown.add((i)=>{
                Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 0;
                Co.chessesValue[(this.y - 50)/100][(this.x -50)/100] = 0;
                Co.chessesType[(this.y - 50)/100][(this.x -50)/100] = 0;                          
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
                //lắp giá trị
                Co.chessesPos[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = 12;
                Co.chessesValue[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = this.sprite.STEP;
                Co.chessesType[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = this.sprite.type;
                this.x = Co.exam.x;
                this.y = Co.exam.y;
                this.offDirect();
                Co.blueFirst = 'red';
            });
        };
        this.eatEnemyChessBlue();
    }
    directRed() {
        Co.directs.push(new directPoint(this.x, this.y, {
            step: this.sprite.STEP
        }));
        for(i=0; i<Co.directGroup.length; i++){
            Co.directGroup[i].events.onInputDown.add((i)=>{
                Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 0;     
                Co.chessesValue[(this.y - 50)/100][(this.x -50)/100] = 0;
                Co.chessesType[(this.y - 50)/100][(this.x -50)/100] = 0;  
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
                //lắp giá trị
                Co.chessesPos[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = 13;
                Co.chessesValue[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = this.sprite.STEP;
                Co.chessesType[(Co.exam.y - 50)/100][(Co.exam.x - 50)/100] = this.sprite.type;
                this.x = Co.exam.x;
                this.y = Co.exam.y;
                this.offDirect();
                Co.blueFirst = 'blue';
            });
        };
        this.eatEnemyChessRed();
    }
    resetArr(arr) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
    }
    //ăn chess
    eatEnemyChessBlue(){
        for(i=0; i<Co.killGroup.length; i++){
            Co.killGroup[i].events.onInputDown.add((i)=>{
                var posEatX = (i.position.x -19.5)/100;
                var posEatY = (i.position.y-19.5)/100;
                var posRealX = i.position.x - 19.5 +50;
                var posRealY = i.position.y -19.5 +50;
                // console.log(posRealX, posRealY);
                // console.log(Co.chessesType[(this.y-50)/100][(this.x-50)/100]);
                // console.log(Co.chessesValue[posEatY][posEatX]);
                // console.log(Co.chessesType[posEatY][posEatX]);
                // if có quân khác màu => ăn
                if((Co.chessesType[posEatY][posEatX] !== 0)&&(Co.chessesType[posEatY][posEatX] !== Co.chessesType[(this.y-50)/100][(this.x-50)/100])){
                    console.log("eat eat eat");
                    // console.log(Co.chessGroup);
                    var obj = Co.chessGroup.children.find(function(obj){
                        if((obj.position.x === posRealX)&&(obj.position.y === posRealY)){
                            return obj;
                        }
                    })
                    // console.log(obj);
                    for(i=0; i<Co.chesses.length; i++){
                        if((Co.chesses[i].x == obj.position.x)&&(Co.chesses[i].y == obj.position.y)&&(this.sprite.type !== obj.type)){
                            Co.chesses[i].sprite.destroy();
                            Co.chesses.splice(i, 1);
                            Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 0;     
                            Co.chessesValue[(this.y - 50)/100][(this.x -50)/100] = 0;
                            Co.chessesType[(this.y - 50)/100][(this.x -50)/100] = 0;  
                            Co.tweenAncoBlue = Co.game.add.tween(this.sprite).to( 
                                { 
                                    x : obj.position.x, 
                                    y : obj.position.y 
                                }, 600, "Quart.easeOut");
                            Co.tweenAncoBlue.start();
                            //lắp giá trị
                            Co.chessesPos[(obj.position.y - 50)/100][(obj.position.x - 50)/100] = 12;
                            //cộng điểm
                            if(Co.chessesValue[(obj.position.y - 50)/100][(obj.position.x - 50)/100] === 10){
                                Co.pointBlueNow += 100;
                            }else{
                                Co.pointBlueNow += Co.chessesValue[(obj.position.y - 50)/100][(obj.position.x - 50)/100];
                            }
                            Co.chessesValue[(obj.position.y - 50)/100][(obj.position.x - 50)/100] = this.sprite.STEP;
                            Co.chessesType[(obj.position.y - 50)/100][(obj.position.x - 50)/100] = this.sprite.type;
                            this.x = obj.position.x;
                            this.y = obj.position.y;
                            this.offDirect();
                            Co.blueFirst = 'red';
                            break;
                        }
                    }
                    // console.log(Co.chesses);
                    // i.destroy();
                }
                else{
                    console.log("kidding me?");
                }
                // else todo
            });
        }
    }
    eatEnemyChessRed(){
        for(i=0; i<Co.killGroup.length; i++){
            Co.killGroup[i].events.onInputDown.add((i)=>{
                var posEatX = (i.position.x -19.5)/100;
                var posEatY = (i.position.y-19.5)/100;
                var posRealX = i.position.x - 19.5 +50;
                var posRealY = i.position.y -19.5 +50;
                // console.log(posRealX, posRealY);
                // console.log(Co.chessesType[(this.y-50)/100][(this.x-50)/100]);
                // console.log(Co.chessesValue[posEatY][posEatX]);
                // console.log(Co.chessesType[posEatY][posEatX]);
                // if có quân khác màu => ăn
                if((Co.chessesType[posEatY][posEatX] !== 0)&&(Co.chessesType[posEatY][posEatX] !== Co.chessesType[(this.y-50)/100][(this.x-50)/100])){
                    console.log("eat eat eat");
                    // console.log(Co.chessGroup);
                    var obj = Co.chessGroup.children.find(function(obj){
                        if((obj.position.x === posRealX)&&(obj.position.y === posRealY)){
                            return obj;
                        }
                    })
                    // console.log(obj);
                    for(i=0; i<Co.chesses.length; i++){
                        if((Co.chesses[i].x == obj.position.x)&&(Co.chesses[i].y == obj.position.y)&&(this.sprite.type !== obj.type)){
                            Co.chesses[i].sprite.destroy();
                            Co.chesses.splice(i, 1);
                            Co.chessesPos[(this.y - 50)/100][(this.x - 50)/100] = 0;     
                            Co.chessesValue[(this.y - 50)/100][(this.x -50)/100] = 0;
                            Co.chessesType[(this.y - 50)/100][(this.x -50)/100] = 0;  
                            Co.tweenAncoBlue = Co.game.add.tween(this.sprite).to( 
                                { 
                                    x : obj.position.x, 
                                    y : obj.position.y 
                                }, 600, "Quart.easeOut");
                            Co.tweenAncoBlue.start();
                            //lắp giá trị
                            Co.chessesPos[(obj.position.y - 50)/100][(obj.position.x - 50)/100] = 13;
                            //Cộng điểm
                            if(Co.chessesValue[(obj.position.y - 50)/100][(obj.position.x - 50)/100] === 10){
                                Co.pointRedNow += 100;
                            }else{
                                Co.pointRedNow += Co.chessesValue[(obj.position.y - 50)/100][(obj.position.x - 50)/100];
                            }
                            Co.chessesValue[(obj.position.y - 50)/100][(obj.position.x - 50)/100] = this.sprite.STEP;
                            Co.chessesType[(obj.position.y - 50)/100][(obj.position.x - 50)/100] = this.sprite.type;
                            this.x = obj.position.x;
                            this.y = obj.position.y;
                            this.offDirect();
                            Co.blueFirst = 'blue';
                            break;
                        }
                    }
                    // console.log(Co.chesses);
                    // i.destroy();
                }
                else{
                    console.log("kidding me?");
                }
                // else todo
            });
        }
    }
}