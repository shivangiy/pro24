
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var dustbin
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1200,690);
	paperObject=new Paper(100,100,20);
	groundObject=new Ground(width/2,690,width,20);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  }

function draw() {
  rectMode(CENTER);
  background(255,255,255);

  Engine.update(engine)
  
  groundObject.display();
  paperObject.display();
  dustbinObj.display();
  drawSprites()
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:115,y:-90});
    }}