var snake;
var w = 20;
var colo, rows;

function setup(){
  var cnv = createCanvas(800, 800);
  var colo = width/w;
  var rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  snake = new Snake(createVector(400, 400), createVector(1));
}

function draw(){
  snake.run();

}
