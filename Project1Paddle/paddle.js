function Paddle(loc, width, length, vel, col){
  this.loc = loc;
  this.w = width;
  this.l = length;
  this.col = col;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }

  this.update = function(){
    paddleLength = width/2
    this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15)

  }
 this.render = function(){
   fill(255, 255, 255);
   rect(this.loc.x, this.loc.y, this.w, this.l);
 }
 this.checkEdges = function(){
   if(this.loc.x < 0) this.vel.x = -this.vel.x;
   if(this.loc.x > width) this.vel.x = -this.vel.x;
   if(this.loc.y < 0) this.vel.y = -this.vel.y;
   if(this.loc.y > height) this.vel.y = -this.vel.y;
 }
 }
