class Ball {
    constructor(x, y, radius){

         var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':2
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=50;      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      strokeWeight(4);
      fill("blue");
      stroke("white");
      ellipse(0,0,50);
      pop();
    }
  };
  