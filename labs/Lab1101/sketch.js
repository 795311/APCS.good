var data;
var barHeight;
var txt;

function preload(){
  txt = loadJSON("GitHubAPI.json");
}
function setup (){
  console.log(data.);
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
