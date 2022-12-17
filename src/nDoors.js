class nDoors{
    
    constructor(skt, num, floorColor, roofColor, wallColor){
        this.skt=skt;
        this.arr = [];
        this.steps = 2;
        this.depth = num;
        this.width = this.skt.width;
        this.height = this.skt.height;
        this.doorSize = 5; // size of the opeing far in the screen
        this.zoomCntr=1;

        let imageList = [];
        imageList.push(this.skt.loadImage("./assets/g21.png"));
        imageList.push(this.skt.loadImage("./assets/g22.png"));
        imageList.push(this.skt.loadImage("./assets/g23.png"));
        imageList.push(this.skt.loadImage("./assets/g21.png"));

        skt.soundFormats('mp3', 'ogg');
        let gunShot = skt.loadSound('./assets/gunSound');

        this.gunAnimation = new nAnimation(skt,imageList,gunShot);

    }
    setZero(){

        for(let i=0; i<this.depth; ++i){
            let temp = [];
            for(let j=0; j<this.depth; ++j){
                temp[j] = 0;
            }
            this.arr[i] = temp;
        }
    }

    incDepth(){
        this.depth+=this.steps;
        this.zoomCntr--;
        if(this.zoomCntr%5 == 0){
            this.doorSize-=1;
            // this.zoomCntr=1;
        }
        if(this.doorSize<5)this.doorSize=5;
        if(this.depth > 100)this.depth=100;
        this.reset();
    }
    decDepth(){
        this.depth-=this.steps;
        this.zoomCntr++;
        if(this.zoomCntr%5 == 0){
            this.doorSize += 1;
            // this.zoomCntr=1;
        }
        if(this.doorSize > 50)this.doorSize=50;
        if(this.depth < 2)this.depth=2;
        this.reset();
    }

    shoot(){
        this.gunAnimation.play();
    }


    reset(){
        // this.depth += step;
        // if(this.depth < 2)this.depth=2;
        // if(this.depth > 100)this.depth=100;
        // this.cellSize=this.skt.width/this.depth;

        this.cellSize=this.skt.width/this.depth;
        this.setZero();
        for(let i=0; i<this.depth; ++i){
            for(let j=0; j<this.depth; ++j){
                if(i == 0)this.arr[i][j]=1;
                else{
                    if((j+1)%(i+1) == 0){
                        if(this.arr[i-1][j] == 1)this.arr[i][j] = 0;
                        else this.arr[i][j] = 1;
                    }else{
                        this.arr[i][j] = this.arr[i-1][j];
                    }
                }
            }
        }
    }



    rect(x,y,w,h){
        this.skt.beginShape();
        this.skt.vertex(x, y);
        this.skt.vertex(x+w, y);
        this.skt.vertex(x+w, y+h);
        this.skt.vertex(x, y+h);
        this.skt.endShape(this.skt.CLOSE);
    }

    

    disp(){
        this.skt.noStroke();

        let mouseLookSide=0;
        let mouseLookUp=this.height/4;

        if(this.skt.mouseX>0 && this.skt.mouseX<this.width && this.skt.mouseY>0 && this.skt.mouseY<this.height){
            mouseLookSide = this.skt.map(this.skt.mouseX,0,this.width,-450,450);
            mouseLookUp = this.skt.map(this.skt.mouseY,0,this.height,-450,450);
        }

        
        
        for(let i=0; i<this.depth; ++i){
            for(let j=0; j<this.depth; ++j){

                if(i<this.doorSize)this.skt.fill(0);
                else if(i==this.doorSize && j<this.doorSize)this.skt.fill(0);
                else if(this.arr[j][i] == 1 || i<j)this.skt.fill(117, 77, 40);
                else this.skt.fill(40, 32, 12);

                this.skt.translate((this.width/2)+mouseLookSide,(this.height/2)-mouseLookUp);
                
                if(i<j && j > this.doorSize)this.skt.fill(57, 57, 57);
                this.rect(i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize);
                this.rect(-i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize);
                                
                if(i<j && j > this.doorSize)this.skt.fill(113,113,113);
                this.rect(i*this.cellSize,-j*this.cellSize,this.cellSize,this.cellSize);
                this.rect(-i*this.cellSize,-j*this.cellSize,this.cellSize,this.cellSize);
                
                this.skt.translate((-this.width/2)-mouseLookSide,(-this.height/2)+mouseLookUp);
            }
        }

        this.gunAnimation.disp(this.width/2,this.height-this.gunAnimation.getFirstFrame().height*0.9);
    }


}