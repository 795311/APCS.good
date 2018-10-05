//  Global variables
//var b1;
//var b2;
//var b3;
var balls=[];//array
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(100);//method call
}


function draw() {
  background(20,20,20);
  for(var i= 0; i<balls.length; i++){
    balls[i].run();
  }
}


function loadBalls(numBalls){
  for(var i=0; i < numBalls; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius=random(20,40);
    var col= color(random(1, 255), random(1, 255), random(1, 255));
    balls.push(new Ball(loc, vel, radius, col));
  }

}
