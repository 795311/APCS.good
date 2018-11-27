var snake;
var w = 20;
var colo, rows;
var food;
var startNewGame = false;
var startNewRound;


function setup(){
  frameRate(9);
  var cnv = createCanvas(800, 800);
  var colo = width/w;
  var rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  startNewGame();
}


function draw(){
  background(0);
  snake.run();
  //if snake gets food, startNewRound
}
function keyPressed(){
  text(keyCode, 0, 0);
  if(keyCode === 87){
    snake.vel = createVector(0, -1*w);
  }
  if(keyCode === 83){
    snake.vel = createVector(0, 1*w);
  }
  if(keyCode === 68){
    snake.vel = createVector(1*w,0);
  }
  if(keyCode === 65){
    snake.vel = createVector(-1*w,0);
  }
}
function startNewRound(){
  //update score
  //make snake grow by one
}

function startNewGame(){
  snake = new Snake(createVector(400, 400), createVector(1));
  food = new Food(createVector(random(0,400), color(255,255,255)));
  //set score to 0
  //random food not near the middle
}
