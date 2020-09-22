class dustBin{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }


        this.bin = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height

        World.add(world,this.bin) 
    }
    display(){
        var pos= this.bin.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.bin.position;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();


    }
}