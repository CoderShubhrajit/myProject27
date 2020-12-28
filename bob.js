class Bob
{
    constructor(x,y)
    {
        var options = {
            restitution: 0.3,
            friction: 1,
            density: 1.0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,options);
        World.add(world,this.body);
    }
    display()
    {
        push();
        //translate(this.body.position.x,this.body.position.y);
        circleMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,50);
        pop();
    }
}