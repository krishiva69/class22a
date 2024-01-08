const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld, ground;

var ball;

function setup() {
  createCanvas(400,400);

  myengine= Engine.create();
  //my world is myengine's world

  myworld= myengine.world;

  var options = {
  isStatic:true
  }
ground = Bodies.rectangle(200, 390, 400, 20, options)

World.add(myworld, ground);

console.log(ground.position.y);

var options = {
restitution: 1
}

ball = Bodies.circle(200, 100, 20, options);

World.add(myworld, ball);
}

function draw() {
  background(0);  

Engine.update(myengine);

rectMode(CENTER);

fill("")
rect(ground.position.x, ground.position.y, 400, 20);

ellipseMode(RADIUS);

fill("red");
circle(ball.position.x, ball.position.y, 20);
  //rect(200, 200);
}