class Box
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8,
            friction:1,
            density:0.04,
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
fill("blue")
push()
translate(pos.x, pos.y)
rect(0,0,this.width,this.height)
pop()
        }
    
}