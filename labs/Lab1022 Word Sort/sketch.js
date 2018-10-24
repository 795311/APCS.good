
function setup(){
  noCanvas();
  txt.push = loadStrings("words.txt");
}

function draw(){
 bubbleSort(txt);
}
