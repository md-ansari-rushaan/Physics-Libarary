const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var engine,world,object,Ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var object_var = {
    isStatic : true
  }
  object = Bodies.rectangle(400,390,800,20,object_var);
  World.add(world,object);
  var Ball_fall = {
    restitution : 1.0
  }
  Ball = Bodies.circle(400,200,70,Ball_fall);
  World.add(world,Ball);
}
function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 800, 20);
  ellipse(Ball.position.x,Ball.position.y,70,70);
}