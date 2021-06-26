
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width/2, height/4, width/7, 25);

	startBobpositionX = width/2;
	startBobpositionY = height/4 + 500;
	bobDiameter = 40;
    bob1 = new Bob(startBobpositionX - bobDiameter*2, startBobpositionY, bobDiameter);
	bob2 = new Bob(startBobpositionX - bobDiameter, startBobpositionY, bobDiameter);
	bob3 = new Bob(startBobpositionX, startBobpositionY, bobDiameter);
	bob4 = new Bob(startBobpositionX + bobDiameter, startBobpositionY, bobDiameter);
	bob5 = new Bob(startBobpositionX + bobDiameter*2, startBobpositionY, bobDiameter);

	rope1 = new Rope(bob1.body, roof1.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof1.body, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.body, roof1.body, 0, 0);
	rope4 = new Rope(bob4.body, roof1.body, bobDiameter*1, 0);
	rope5 = new Rope(bob5.body, roof1.body, bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-55});
  
	}
}

function drawLine(constraint) {
Bobbodyposition = constraint.bodyA.position;
Roofbodyposition = constraint.bodyB.position;
Roofbodyoffset = constraint.pointB;
RoofbodyX = Roofbodyposition.x + Roofbodyoffset.x;
RoofbodyY = Roofbodyposition.y + Roofbodyoffset.y;
line(Bobbodyposition.x, Bobbodyposition.y, RoofbodyX, RoofbodyY);
}
