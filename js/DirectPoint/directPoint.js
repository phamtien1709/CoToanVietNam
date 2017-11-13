class directPoint {
    constructor(x, y, configs){
        this.x = 39;
        this.y = 38.5;
        this.x1 = x;
        this.y1 = y;
        this.configs = configs;
        Co.chonco = Co.game.add.sprite(x, y, 'chonco');
        Co.chonco.anchor = new Phaser.Point(0.5, 0.5);
        for ( i=0; i<= this.configs.step;i++ ){
            if((0.01*x + i)< 9){
                Co.directsP[0.01*y - 0.5][0.01*x + i - 0.5] = 11;
            }
            if((0.01*x - i)>0){
                Co.directsP[0.01*y - 0.5][0.01*x - i - 0.5] = 11;
            }
            if((0.01*y - i) > 0){
                Co.directsP[0.01*y - i - 0.5][0.01*x - 0.5] = 11;
            }
            if((0.01*y + i) < 11){
                Co.directsP[0.01*y + i - 0.5][0.01*x - 0.5] = 11;                    
            }
            if((0.01*x + i< 9)&&(0.01*y + i < 11)){ 
                Co.directsP[0.01*y + i - 0.5][0.01*x + i - 0.5] = 11;
            }
            if((0.01*x - i > 0)&&(0.01*y - i > 0)){
                Co.directsP[0.01*y - i - 0.5][0.01*x - i - 0.5] = 11;  
            }
            if((0.01*x + i< 9)&&(0.01*y - i > 0)){
                Co.directsP[0.01*y - i - 0.5][0.01*x + i - 0.5] = 11;  
            }
            if((0.01*x - i>0)&&(0.01*y + i < 11)){
                Co.directsP[0.01*y + i - 0.5][0.01*x - i - 0.5] = 11;  
            }     
        }
        for( i=0; i<11; i++){
            let k;
            for(k=0; k<Co.chessesPos[i].length;k++ ){
                if((Co.directsP[i][k] == 11)&&(Co.chessesPos[i][k] == 12)){
                    Co.directsP[i][k] = 0;
                }
                if((Co.directsP[i][k] == 11)&&(Co.chessesPos[i][k] == 13)){
                    Co.directsP[i][k] = 0;
                }
            }
        }
        for(i=0; i<=this.configs.step; i++){
            if((0.01*x + i)< 9){
                if(((0.01*x + i - 0.5 - 1)> (0.01*x - 0.5))){
                    if(Co.directsP[0.01*y - 0.5][0.01*x + i - 0.5- 1] == 0){
                        Co.directsP[0.01*y - 0.5][0.01*x + i - 0.5] = 0;
                    }
                }
            }
            if((0.01*x - i)>0){
                if((0.01*x - i - 0.5 + 1)< (0.01*x - 0.5)){
                    if(Co.directsP[0.01*y - 0.5][0.01*x - i - 0.5 + 1] == 0){
                        Co.directsP[0.01*y - 0.5][0.01*x - i - 0.5] = 0;
                    }
                }
            }
            if((0.01*y - i) > 0){
                if((0.01*y - i - 0.5 + 1)< (0.01*y - 0.5)){
                    if(Co.directsP[0.01*y - i - 0.5 + 1][0.01*x - 0.5 ] == 0){
                        Co.directsP[0.01*y - i - 0.5][0.01*x- 0.5] = 0;
                    }
                }
            }
            if((0.01*y + i) < 11){
                if((0.01*y + i - 0.5 - 1)> (0.01*y - 0.5)){
                    if(Co.directsP[0.01*y + i - 0.5 - 1][0.01*x - 0.5 ] == 0){
                        Co.directsP[0.01*y + i - 0.5][0.01*x- 0.5] = 0;
                    }
                }
            }
            if((0.01*x + i< 9)&&(0.01*y + i < 11)){
                if(((0.01*y + i - 0.5 - 1)>(0.01*y - 0.5)) && ((0.01*x + i - 0.5 - 1)>(0.01*x - 0.5))){
                    if(Co.directsP[0.01*y + i - 0.5 - 1][0.01*x + i - 0.5 - 1] == 0) {
                        Co.directsP[0.01*y + i - 0.5][0.01*x + i - 0.5] = 0;
                    }
                }
            }
            if((0.01*x - i > 0)&&(0.01*y - i > 0)){
                if(((0.01*y - i - 0.5 + 1)<(0.01*y - 0.5)) && ((0.01*x - i - 0.5 + 1)<(0.01*x - 0.5))){
                    if(Co.directsP[0.01*y - i - 0.5 + 1][0.01*x - i - 0.5 + 1] == 0) {
                        Co.directsP[0.01*y - i - 0.5][0.01*x - i - 0.5] = 0;
                    }
                }
            }
            if((0.01*x + i< 9)&&(0.01*y - i > 0)){
                if(((0.01*y - i - 0.5 + 1)<(0.01*y - 0.5)) && ((0.01*x + i - 0.5 - 1)>(0.01*x - 0.5))){
                    if(Co.directsP[0.01*y - i - 0.5 + 1][0.01*x + i - 0.5 - 1] == 0) {
                        Co.directsP[0.01*y - i - 0.5][0.01*x + i - 0.5] = 0;
                    }
                }
            }
            if((0.01*x - i>0)&&(0.01*y + i < 11)){
                if(((0.01*y + i - 0.5 - 1)>(0.01*y - 0.5)) && ((0.01*x - i - 0.5 + 1)<(0.01*x - 0.5))){
                    if(Co.directsP[0.01*y + i - 0.5 - 1][0.01*x - i - 0.5 + 1] == 0) {
                        Co.directsP[0.01*y + i - 0.5][0.01*x - i - 0.5] = 0;
                    }
                }
            } 
        }
        for(i = 0; i<Co.directsP.length; i++){
            for(j=0; j<Co.directsP[i].length; j++){
                if(Co.directsP[i][j] == 11 ) Co.directGroup.push(Co.game.add.sprite(j*100 + this.x,i*100+this.y, 'huongdi'));
            }
        }
        for(i=0; i<Co.directGroup.length; i++){
            Co.directGroup[i].inputEnabled = true;
        }
        //xác định fields quanh 8 ô, tính các nước ăn theo step.
        this.findObNear();
        console.log(Co.posKillGroup);
        for(i in Co.posKillGroup){
            if(((0.01*this.x1 - 0.5 - 1)>Co.posKillGroup[i].x)&&((0.01*this.y1 -0.5 - 1)>Co.posKillGroup[i].y)){
                for(j=0.01*this.y1 -0.5 - 1;j>Co.posKillGroup[i].y; j--){
                    let k;
                    for(k = 0.01*this.x1 -0.5 -1; k>Co.posKillGroup[i].x; k--){
                        
                    }
                }
            }
            // if(){}
            // if(){}
            // if(){}
            // if(){}
            // if(){}
            // if(){}
            // if(){}
            // if(){}
            Co.killGroup.push(Co.game.add.sprite(Co.posKillGroup[i].x*100+19.5,Co.posKillGroup[i].y*100+19.5, 'oAnDuoc'));
        }
        // defined pheps cộng trc
        // hiện nước ăn
        // this.update() = this.update.bind(this);
    }
    update(){
        console.log(Co.directGroup);
        console.log(Co.directGroup[2].position.x + 50 -this.x, Co.directGroup[2].position.y + 50 -this.y);
    }
    //tìm quân cờ nằm cạnh quân đã chọn
    findObNear(){
        // console.log(Co.chessesPos);
        // // console.log((this.x1/100)-0.5, (this.y1/100)-0.5);
        // console.log(Co.chessesValue);
        // console.log(Co.chessesType);
        //sumToEat
        function sumToEat(cmp1, cmp2, add1, add2, posx, posy, posx1, posy1){
            if(cmp1 === cmp2){
                // console.log("Same");
                let sumx;
                let sumy;
                if (add1 == 10) add1 = 0;
                if((posx>posx1)&&(posy>posy1)){
                    sumx = -add1 -add2 -1;
                    sumy = -add1 -add2 -1;
                }
                if((posx==posx1)&&(posy>posy1)){
                    sumx = 0;
                    sumy = -add1 -add2 -1;
                }
                if((posx<posx1)&&(posy>posy1)){
                    sumx = add1 + add2 + 1;
                    sumy = -add1 -add2 - 1;
                }
                if((posx<posx1)&&(posy==posy1)){
                    sumx = add1 + add2 +1;
                    sumy = 0;
                }
                if((posx<posx1)&&(posy<posy1)){
                    sumx = add1 + add2 +1;
                    sumy = add1 + add2 +1;
                }
                if((posx==posx1)&&(posy<posy1)){
                    sumx = 0;
                    sumy = add1 + add2 +1;
                }
                if((posx>posx1)&&(posy<posy1)){
                    sumx = -add1 -add2 -1;
                    sumy = add1 + add2 +1;
                }
                if((posx>posx1)&&(posy==posy1)){
                    sumx = -add1 -add2 -1;
                    sumy = 0;
                }
                if((0<=posx + sumx)&&(9>posx +sumx)&&(posy+sumy>=0)&&(posy+sumy<11)){
                    Co.posKillGroup.push({
                        x: posx + sumx,
                        y: posy + sumy
                    });
                }
            }
            else{
                // console.log("not same");
            }
        }
        //tìm các quân cờ xung quanh
        if(((0.01*this.y1 -0.5 -1>=0)&&((0.01*this.x1 - 0.5 - 1)>=0))){
            if((Co.chessesValue[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5 - 1])!==0){
                console.log("Top Left");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5 - 1], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5 - 1],
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5 - 1,
                    0.01*this.y1 -0.5 -1
                );
            };
        }
        if((0.01*this.y1 -0.5 -1>=0)){
            if((Co.chessesValue[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5])!==0){
                console.log("Top");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5,
                    0.01*this.y1 -0.5 -1
                );
            };
        }     
        if(((0.01*this.y1 -0.5 -1)>=0)&&((0.01*this.x1 - 0.5 + 1)<9)){
            if((Co.chessesValue[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5 + 1])!==0){
                console.log("Top Right");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5 + 1], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5 -1][0.01*this.x1 - 0.5 + 1], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5 + 1,
                    0.01*this.y1 - 0.5 - 1
                );
            };
        }
        if((0.01*this.x1 -0.5 + 1)<9){
            if((Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 - 0.5 + 1])!==0){
                console.log("Right");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 - 0.5 + 1], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 - 0.5 + 1], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5 + 1,
                    0.01*this.y1 - 0.5
                );
            };
        }
        if(((0.01*this.y1 -0.5 +1)<=10)&&((0.01*this.x1 -0.5 +1)<9)){
            if((Co.chessesValue[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5 + 1])!==0){
                console.log("Bot Right");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5 + 1], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5 + 1], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5 + 1,
                    0.01*this.y1 -0.5 +1
                );
            };
        }
        if((0.01*this.y1 -0.5 +1)<=10){
            if((Co.chessesValue[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5])!==0){
                console.log("Bot");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5,
                    0.01*this.y1 -0.5 +1
                );
            };
        }   
        if(((0.01*this.x1 -0.5 -1)>=0)&&((0.01*this.y1 -0.5 +1)<=10)){
            if((Co.chessesValue[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5 - 1])!==0){
                console.log("Bot Left");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5 - 1], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5 +1][0.01*this.x1 - 0.5 - 1], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5 - 1,
                    0.01*this.y1 -0.5 + 1
                );
            };
        }
        if((0.01*this.x1 -0.5 -1)>=0){
            if((Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 - 0.5 - 1])!==0){
                console.log("Left");
                sumToEat(
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 - 0.5 - 1], 
                    Co.chessesType[0.01*this.y1 -0.5][0.01*this.x1 -0.5], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 - 0.5 - 1], 
                    Co.chessesValue[0.01*this.y1 -0.5][0.01*this.x1 -0.5],
                    0.01*this.x1 -0.5,
                    0.01*this.y1 -0.5,
                    0.01*this.x1 - 0.5 - 1,
                    0.01*this.y1 - 0.5
                );
            };
        }
        // console.log(Co.posKillGroup);    
    }
}