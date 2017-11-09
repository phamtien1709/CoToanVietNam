class directPoint {
    constructor(x, y, configs){
        this.x = 39;
        this.y = 38.5;
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
        // this.update() = this.update.bind(this);
    }
    update(){
        console.log(Co.directGroup);
        console.log(Co.directGroup[2].position.x + 50 -this.x, Co.directGroup[2].position.y + 50 -this.y);
    }
}