/*
**Ball Constructor function
**Justin Mills
**Aug 20, 2018
*/
function Ball(location, velocity, radius, col){
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //This function changes the location of the Ball
  //by adding speed to x and y
  this.update=function(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  //checkEdges()reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function (){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

  }//  End of the Ball constructor
