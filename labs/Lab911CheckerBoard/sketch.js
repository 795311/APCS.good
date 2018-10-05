//Justin Mills


var square = [];
var numberOfSquares = 8
var squareSize;
var squareColor = (0,0,0);


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadSquares(8);
  for(var i = 0; i < square.length; i++){
    squareSize = width/numberOfSquares;
    square[i].render();
  }
}


function loadSquares(size){
  var rowNum = 0;
  for(var rowNum = 0; rowNum < size; rowNum++){
    var row = 100*rowNum
    for(var colNum= 0; colNum < size; colNum++){
      var col = 100*colNum
      var loc = createVector (col,row);
      if((rowNum + colNum)%2 == 0){  
        squareColor = (0,0,0);
      }else{
        squareColor = (255,255,255);
      }
      var s = new Sqr(loc, 100, squareColor);
      square.push(s);


    }
  }
}
  //  traverse array and run each square





  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
