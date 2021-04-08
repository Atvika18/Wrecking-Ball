class Ball
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8,
            frictionAir:0.005,
            density:1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.height = height;
        this.width = width;
        World.add(world,this.body)
    }

    display()
        {
var pos = this.body.position;
var angle = this.body.angle;
rectMode(CENTER)
fill("pink")
push()
translate(pos.x, pos.y)
ellipse(0,0,this.width,this.height)
pop()
        }
    
}