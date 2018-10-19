function Paddle(loc, width, length, vel, col){
  this.loc = loc;
  this.w = width;
  this.l = length;
  this.col = col;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    paddleLength = width/2
    this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15)

  }
 this.render = function(){
   fill(255, 255, 255);
   rect(this.loc.x, 600, 150, 20);
 }
 }
