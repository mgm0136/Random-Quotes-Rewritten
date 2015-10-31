
//myArray datasets starts from 0-4

var myArray= [ 
  "As a user, I can click a button to show me a new random quote.",
  "As a user, I can press a button to tweet out a quote.",
  "I believe in you",
  "Gains",
  "More Gains",
  "Get them Gains!",
  "what we do in life, echoes into eternity",
  "I kept dreaming of a world I thought I'd never see.",
  "A lion doesn't concern himself with the opinions of sheep",
 ];

function Damn(){
    var Bro = Math.floor(Math.random()*myArray.length);
    return Bro;
  
}


function myFunction() {

document.getElementById("turtles").innerHTML = myArray[(Damn())];
}
 $(".button").click(function() {
var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);
   
   
   
});
