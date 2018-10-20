function Paddle(loc, width, height, vel, col){ //parameters of the paddle
  this.loc = loc;
  this.w = width;
  this.height = height;
  this.col = col;
  this.vel = vel;
  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
  var mouseLoc = createVector(mouseX, 600);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, .5); //lerps the paddle to the mouse
  }
 this.render = function(){
   fill(255, 255, 255);
   rect(this.loc.x, 600, 150, 20);
 }
 }
