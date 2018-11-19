

function Food(loc, clr){
  this.loc = loc;
  this.clr = clr;
}

this.run = function(){
  this.update();
  this.render();
}

this.update = function(){

}

this.render = function(){
  fill(0,0,255);
  rect(this.loc.x, this.loc.y, w, w);
}
