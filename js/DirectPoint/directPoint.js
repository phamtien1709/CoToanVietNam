class directPoint {
    constructor(x, y, configs){
        this.x = x - 11;
        this.y = y - 10.5;
        this.configs = configs;
        Co.chonco = Co.game.add.sprite(x, y, 'chonco');
        console.log("mouse");
        Co.chonco.anchor = new Phaser.Point(0.5, 0.5);
        for(i=0; i <= this.configs.step; i++){
            if(i>0){
                console.log(i);
                console.log(Co.chesses);
                for(j=0; j<Co.chesses.length;j++){
                    if((Co.chesses[j].x == x + i * 100)&&(Co.chesses[j].y == y + i * 100)){
                        Co.directs[0.01*y + i - 0.5][0.01*x - 0.5 + i] = 1;
                    }
                    else if((Co.chesses[j].x == x + i * 100)&&(Co.chesses[j].y == y)){
                        Co.directs[0.01*y - 0.5][0.01*x - 0.5+i] = 1;
                    }
                    else if((Co.chesses[j].x == x - i * 100)&&(Co.chesses[j].y == y)){
                        Co.directs[0.01*y - 0.5][0.01*x - 0.5 - i] = 1;
                    }
                    else if((Co.chesses[j].x == x - i * 100)&&(Co.chesses[j].y == y + i * 100)){
                        Co.directs[0.01*y - 0.5 + i][0.01*x - 0.5 - i] = 1;
                    }
                    else if((Co.chesses[j].x == x)&&(Co.chesses[j].y == y + i * 100)){
                        Co.directs[0.01*y - 0.5 + i][0.01*x - 0.5] = 1;
                    }
                    else if((Co.chesses[j].x == x - i * 100)&&(Co.chesses[j].y == y - i * 100)){
                        Co.directs[0.01*y - 0.5 - i][0.01*x - 0.5 - i] = 1;
                    }
                    else if((Co.chesses[j].x == x + i * 100)&&(Co.chesses[j].y == y - i * 100)){
                        Co.directs[0.01*y - 0.5 - i][0.01*x - 0.5+i] = 1;
                    }
                    else if((Co.chesses[j].x == x)&&(Co.chesses[j].y == y - i * 100)){
                        Co.directs[0.01*y - 0.5 - i][0.01*x - 0.5] = 1;
                    }
                    else if((Co.chesses[j].x == x) && (Co.chesses[j].y == y)){
                        Co.directs[0.01*y - 0.5][0.01*x - 0.5] = 1;
                    }
                };
        
                // Co.directGroup.create(this.x + i*100, this.y, 'huongdi');
                // Co.directGroup.create(this.x - i*100, this.y, 'huongdi');
                // Co.directGroup.create(this.x, this.y + i*100, 'huongdi');
                // Co.directGroup.create(this.x, this.y + i*100, 'huongdi');
                // Co.directGroup.create(this.x + i*100, this.y + i*100, 'huongdi');
                // Co.directGroup.create(this.x - i*100, this.y - i*100, 'huongdi');
                // Co.directGroup.create(this.x + i*100, this.y - i*100, 'huongdi');
                // Co.directGroup.create(this.x - i*100, this.y + i*100, 'huongdi');
            }
        }
        console.log(Co.directs);
    }
}