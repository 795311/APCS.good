var Balls = [];
var paddle;
var score = 0;

function setup(){ //setup code for canvas, background, balls
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  loadBalls(10);
  loadPaddle();
  frameRate(120);
}

function draw(){
  background(20,20,20,60);
  textSize(35);
  fill(255, 255, 255);
  text(score, 400, 400);
  paddle.run();
  for(var i = 0; i<Balls.lenght; i++){
    Balls[i].run();
  }
}

function loadBalls(numBalls){
  for(i=0; i <numBalls; i++){
  var loc = createVector(random(width), 60);
  var vel = createVector(random(-3,3), random(-3,3));
  var radius = 10;
  var col = color(random(1, 255), random(1, 255), random(1, 255));
  Balls.push(new Ball(loc, vel, radius, col));
}
}
function loadPaddle(){
  var loc = createVector(400, 500);
  var vel = createVector (0,0);
  var width = 250;
  var length = 30;
  var col = color(255, 255, 255);
  paddle = new Paddle(loc, width, length, col);
}
