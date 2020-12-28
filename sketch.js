
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,700,15);

	bobObject1 = new Bob(75,250);
	bobObject2 = new Bob(125,250);
	bobObject3 = new Bob(175,250);
	bobObject4 = new Bob(225,250);
	bobObject5 = new Bob(275,250);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
}