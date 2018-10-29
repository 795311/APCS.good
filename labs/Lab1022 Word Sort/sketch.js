var txt = [];
function preload(){
  txt = loadStrings("words.txt")
}
function setup(){
  noCanvas();
  console.log(txt);
  bubbleSort(txt);
  txt.push = loadStrings("words.txt");
}

function draw(){
}

function bubbleSort(txt){
  var length = txt.length;
  for(var i = 0; i < length; i++0){
    for(var p = 0; p < (length - i - 1); p++){
      if(txt[p] > txt[p+1]){
        var temp = txt[p];
        txt[p] = txt[p+1];
        txt[p+1] = temp;
        console.log(txt);
      }
    }
  }
}
