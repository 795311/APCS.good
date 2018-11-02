var data;
var barHeight;

function preload(){
  data = loadJSON("Battle4Online.json");
}
function setup (){
  console.log(data.hooks);
}
