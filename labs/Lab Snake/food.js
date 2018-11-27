

function Food(){
  this.vec = createVector().mult(w);

  this.x = function(){
    return this.vec.x;
  }

  this.y = function(){
    return this.vec.y;
}
this.draw = function(){
  fill(255, 255, 255);
  rect(this.x(), this.y(), x, x);
}
this.ate = function(){
  this.vec = randomVector().mult(w);
}
}
