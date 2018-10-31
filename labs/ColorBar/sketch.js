var Bar = []; //colorbar array

function setup(){ //setup code for project
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255,255,255); //draw canvas
  numBar = 50;
  loadBar(50);
  bubbleSort(Bar);
}

function draw(){
  background(255,255,255)
  for(var i = 0; i< Bar.length; i++){
    Bar[i].run();
  }
}

function loadBar(numBar){
  for(var j = 0; j< numBar; j++){
  var w = 800/numBar;
  var h = 250;
  var loc = createVector(0+(w*j), 150);
  var red = random(0, 255);
  var green = random(0, 255);
  var blue = random(0, 255);
  var clr = color(red, green, blue);
  var clrAvg = (blue + green + red)/3;
  var Bars = new colorBar(loc, w, h, clr, clrAvg);
    Bar.push(Bars);
  }
}

function bubbleSort(Bar){
  var length = Bar.length;
  for(var i = 0; i < length; i++){
    for(var p = 0; p < (length - i - 1); p++){
      if(Bar[p].clrAvg > Bar[p+1].clrAvg){
        var temp = Bar[p];
        Bar[p] = Bar[p+1];
        Bar[p+1] = temp;
      }
    }
  }
}
