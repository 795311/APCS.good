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
  background()
  for(var i = 0; i < Bar.lenght; i++)
    Bar[i].run();
}

function loadBar(numBar){
  for(var j = 0; j<numBar; j++){
  var w;
  var h;
  var loc;
  var red;
  var green;
  var blue;
  var bar;
  var clr = color(red, green, blue);
  var clrAvg = (blue);
  var Bars = new colorBar(loc, w, h, clr, clrAvg);
    Bar.push(Bars);
  }
}

function bubbleSort(Bar){
  var length = Bar.length;
  for(var i = 0; i < length; i++0){
    for(var p = 0; p < (length - i - 1); p++){
      var a =
      var b =
      
      if(txt[p] > txt[p+1]){

        var temp = txt[p];
        txt[p] = txt[p+1];
        txt[p+1] = temp;
        console.log(txt);
      }
    }
  }
}
