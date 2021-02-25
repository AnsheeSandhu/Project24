const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine , world ;
var hammer1, stone1,ball1;
var ground ;


function setup() {
	var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
    hammer1 = new Hammer(600,300);
	stone1 = new Stone(600,200,100,100);
	ball1 = new Ball(450,370,50);

	Engine.run(engine);
  
}


function draw(){
	rectMode(CENTER);
	
    background("lightblue");
    Engine.update(engine);
 

	hammer1.display();
	ground.display();
	stone1.display();
	ball1.display();


}



