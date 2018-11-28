var snake;
var w = 20;
var colo, rows;
var food;


function setup(){
  frameRate(10);
  var cnv = createCanvas(800, 800);
  var colo = width/w;
  var rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  startNewGame();
  makeSnake(1);
  makeFood(1);

}


function draw(){
  background(0);
  snake.run();
  food.run();
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

function checkCollision(){
}

function makeFood(numFood){
  for(var i = 0; i < numFood; i++);
  var min = 1;
  var max = 40;
  var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var loc = createVector(locX, locY);
  var newFood = new Food(loc);
  //food.push(newFood);
}


function makeSnake(){

    var loc = createVector(200,200);
    var vel = createVector(0,0);
    snake = new Snake(loc, vel);


}


function startNewRound(){
  //update score
  //make snake grow by one
}

function startNewGame(){

}
