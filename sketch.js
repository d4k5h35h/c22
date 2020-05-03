const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;
function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var ball_options = {
  "restitution" : 1.0,
  "friction" : 0.5,
  "density" : 0.7,
}
var ground_options = {
  "friction" : 0.5,
  "isStatic": true,
}

ground = Bodies.rectangle(0,350,400,15,ground_options)
ball = Bodies.circle(200,200,50,ball_options);
World.add(world,ball);
World.add(world,ground);
console.log(ball.position.x);

}

function draw() {
  background(0,0,0);
Engine.update(engine)

circle(ball.position.x,ball.position.y,50);
rect(ground.position.x,ground.position.y,400,15);
}