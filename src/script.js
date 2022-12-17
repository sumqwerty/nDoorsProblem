
const sketch = (skt) => {
    let appCanvas;
    let obj;

    skt.setup = () => {
        appCanvas = skt.createCanvas(1000,600);
        appCanvas.parent("canvas-container");
        obj = new nDoors(skt,100);
        obj.reset(50);
        
    };

    // skt.keyReleased=()=>{
    //     if(skt.key == 'w')obj.decDepth();
    //     // else if(skt.key == 's')obj.incDepth();
    // }
    skt.keyPressed=()=>{
        if(skt.key == ' ')obj.shoot();
    }

    skt.draw = () =>{
        if(skt.keyIsDown(skt.UP_ARROW))obj.decDepth();
        else if(skt.keyIsDown(skt.DOWN_ARROW))obj.incDepth();
        obj.disp();
    };

};



let myp5 = new p5(sketch);

