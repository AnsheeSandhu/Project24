class Sand {
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
          'friction':5,
          'density':1
        }
        this.body=Bodies.circle(x,y,r,options)
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world, this.body);
    }
    display();
    {
        sandpos=this.body.position;
        push();
        translate(sandpos.x,sandpos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        ellipse(0,0,this.r);
        pop();
    }
}