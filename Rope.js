class Rope
{
    constructor(bodyA, pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:400,
        }
        this.body = Matter.Constraint.create(options)
        World.add(world, this.body)
        this.pointB = pointB
    }

    display()
    {
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4)
stroke("green")
        line(pointB.x, pointB.y, pointA.x, pointA.y)
        
    }
}