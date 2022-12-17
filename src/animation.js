class nAnimation{

    constructor(sketch, imgList, audio){
        this.skt = sketch;
        this.imgs = imgList;
        this.totalImages = imgList.length;
        this.cntr = 0;
        this.onFrame=0;
        this.animate=false;
        this.sound = audio;
        
        
    }

    getFirstFrame(){
        return this.imgs[0];
    }

    disp(x,y){
        this.cntr++;
        if(this.cntr>20)this.cntr0;
        if(this.animate){
            if(this.onFrame > this.totalImages-1){
                this.animate=false;
                this.onFrame=0;
            }
            if(this.cntr%(this.totalImages-1)*2 == 0)++this.onFrame;
        }
        this.skt.image(this.imgs[0],x,y);
        if(this.onFrame<this.imgs.length)this.skt.image(this.imgs[this.onFrame],x,y);

    }

    play(){
        this.animate=true;
        this.sound.play();
    }
}