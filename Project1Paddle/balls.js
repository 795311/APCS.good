function Ball(location, velocity, radius, col){ //gives the parameters of the ball/chaser
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
    this.checkCollision();
}
  this.update=function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  //checkEdges()reverses speed when the ball touches an edge
  this.render = function (){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
}

function checkCollision(){
  for(var i =0 ; i < balls.length; i++){
   if(balls[i].loc.x > paddle.loc.x &&
   balls[i].loc.y > (paddle.loc.x + width) &&
   balls[i].loc.x < paddle.width &&
   balls[i].loc.y < (paddle.height + height)){
   ball[i].splice(i,1);
 }
  }
}
