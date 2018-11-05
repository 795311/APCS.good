var data;
var barHeight;
var txt;

function preload(){
  txt = loadJSON("population.json");
}
function setup (){
  console.log(data.countrydata);
}
function bubbleSort(txt){
  var length = txt.length;
  for(var i = txt- 1; i > txt; i--){
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
