var Balls = [];
var paddle;
var score = 0;
var newGame = false;

function setup(){ //setup code for canvas, background, balls
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  loadBalls(10);
  loadPaddle();
  frameRate(120);
}

function draw(){
  background(20,20,20);
  textSize(35);
  checkCollision();
  fill(255, 255, 255);
  text(score, 400, 400);
  paddle.run();
  for(var i = 0; i<Balls.length; i++){
    Balls[i].run();
  }
}

function loadBalls(numBalls){
  for(i=0; i <numBalls; i++){
  var loc = createVector(random(width), 60);
  var vel = createVector(random(-3,3), random(-3,3));
  var radius = 25;
  var col = color(random(1, 255), random(1, 255), random(1, 255));
  Balls.push(new Ball(loc, vel, radius, col));
}
}
function loadPaddle(){
  var loc = createVector(400, 500);
  var vel = createVector (0,0);
  var width = 150;
  var length = 20;
  var col = color(255, 255, 255);
  paddle = new Paddle(loc, width, length, col);
}

 function checkCollision(){
   for(var i = Balls.length-1; i>=0; i--){
     var a = Balls[i];
     if(a.loc.x > (paddle.loc.x) &&
     a.loc.x < (paddle.loc.x + 150) &&
     a.loc.y < (paddle.loc.y+20) &&
     a.loc.y > (paddle.loc.y)){
       //if if hits from top do this
       if(a.vel.y > 0){
         console.log(paddle.loc);
         console.log(a.loc);
         Balls.splice(i,1);
       } else{
         //starts new round if it hits from bottom
         newgame = true;
       }
     }
   }
 }
