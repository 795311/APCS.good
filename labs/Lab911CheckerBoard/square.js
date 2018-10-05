

/*
**  Square Constructor Function::
**  Justin Mills
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, sidelengh, color){
//  Add instance variables to your constructor Function
//What does a square need to know about itself??
this.loc=location;
this.w=sidelengh;
this.col=color;

this.run = function(){
  this.checkEdges();
  this.update();
  this.render();
}

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.w, this.w);

  }

}//  End of Square constructor function
