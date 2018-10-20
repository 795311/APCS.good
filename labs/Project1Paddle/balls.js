function Ball(loc, vel, rad, col){ //gives the parameters of the ball
  this.loc=loc;
  this.vel=vel;
  this.rad=rad;
  this.col=col;
  this.acc = createVector(0,.2);
  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
}
//this function changes the location of the ball by adding velocity to the balls
  this.update=function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  this.checkEdges = function(){ //reverses speed of a ball if it touches an edge
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
  this.render = function (){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }
}
