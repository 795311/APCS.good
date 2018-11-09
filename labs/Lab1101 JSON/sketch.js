var data;
var barHeight;


function preload(){
  data = loadJSON("population.json");
}

function setup (){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  bubbleSort();
  console.log(data.countrydata);
}

function draw(){

}

function bubbleSort(){
  var length = data.length;
  for(var i = length- 1; i > 0; i--){
    for(var p = 0; p <  i; p++){
      if(data.countrydata.males[i] > data.countrydata.males[i+1]){
        var temp = data.countrydata.males[p];
        data.countrydata[p] = data.countrydata[p+1];
        data.countrydata[p+1] = temp;
      }
    }
  }
}
