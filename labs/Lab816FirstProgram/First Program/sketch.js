
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
fill(255,5,81)
rect(100,300, 50,50);
fill(0, 300, 0);
triangle(800,500, 400,600, 200,800);
}
