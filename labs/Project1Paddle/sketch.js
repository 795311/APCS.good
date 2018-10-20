//Global Variables
var balls = [];
var paddle = [];
var numofballs = 10;
var newGame = false;
var score = 0;

function setup(){ //setup code for project
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0); //draw canvas
  loadBalls(numofballs); //load balls
  paddle = new Paddle(createVector(0,0), 10, 50);
}

function draw(){
  background(20,20,20);
  textSize(40);
  fill(255, 255, 255);
  text(score, 350, 400);
  paddle.run();
  for(var i = 0; i<balls.length; i++){
    balls[i].run();
  }
  if(score >= 10){
    text(score = "YOU WIN!", 400, 400); //if the score is more than or equal to 10, you win
    textSize(80);
    fill(255, 255, 255);
  }
  checkCollision();
  if(newGame === true){  //create a new game if the ball hits the paddle from the bottom
    numofballs = numofballs +5; //adds 5 balls every time a new round starts
    newGame = false;
    balls = [];
    loadBalls(numofballs);
  }
}
//load balls into the array
function loadBalls(numBalls){
  for(i=0; i <numBalls; i++){
  var loc = createVector(random(width), 60);
  var vel = createVector(random(-3,3), random(-3,3));
  var radius = 25;
  var col = color(random(1, 255), random(1, 255), random(1, 255));
  balls.push(new Ball(loc, vel, radius, col));
}
}

//check to see if there is collision of the ball and the Paddle
 function checkCollision(){
   for(var i = balls.length-1; i>=0; i--){
      var a = balls[i];
      if(a.loc.x > (paddle.loc.x) &&
      a.loc.x < (paddle.loc.x + 150) &&
      a.loc.y < (paddle.loc.y + 50) &&
      a.loc.y > (paddle.loc.y)){
        //if if hits from top do this
        if(a.vel.y > 0){
          balls.splice(i,1);
          score = score + 1; //adds 1 to the score each time a ball is spliced
        } else{
          //starts new round if it hits from bottom
          newgame = true;
        }
        }
    }
  }
